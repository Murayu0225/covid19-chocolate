// To parse this data:
//
//   import { Convert, Data } from "./file";
//
//   const data = Convert.toData(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Data {
    patientsSummary: PatientsSummary;
    data:            { [key: string]: number };
    lastUpdate:      string;
    mainSummary:     MainSummary;
    date:            string;
    datasets:        Datasets;
}

export interface Datasets {
    date: string;
    data: DatasetsDatum[];
}

export interface DatasetsDatum {
    code:  number | null;
    area:  null | string;
    label: string;
    ruby:  null | string;
    count: number;
}

export interface MainSummary {
    children: MainSummaryChild[];
}

export interface MainSummaryChild {
    attr:     string;
    date:     string;
    value:    number;
    children: PurpleChild[];
}

export interface PurpleChild {
    attr:      string;
    value:     number;
    children?: FluffyChild[];
}

export interface FluffyChild {
    attr:  string;
    value: number;
}

export interface PatientsSummary {
    data: PatientsSummaryDatum[];
    date: string;
}

export interface PatientsSummaryDatum {
    日付: Date;
    小計: number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toData(json: string): Data {
        return cast(JSON.parse(json), r("Data"));
    }

    public static dataToJson(value: Data): string {
        return JSON.stringify(uncast(value, r("Data")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Data": o([
        { json: "patients_summary", js: "patientsSummary", typ: r("PatientsSummary") },
        { json: "data", js: "data", typ: m(0) },
        { json: "lastUpdate", js: "lastUpdate", typ: "" },
        { json: "main_summary", js: "mainSummary", typ: r("MainSummary") },
        { json: "date", js: "date", typ: "" },
        { json: "datasets", js: "datasets", typ: r("Datasets") },
    ], false),
    "Datasets": o([
        { json: "date", js: "date", typ: "" },
        { json: "data", js: "data", typ: a(r("DatasetsDatum")) },
    ], false),
    "DatasetsDatum": o([
        { json: "code", js: "code", typ: u(0, null) },
        { json: "area", js: "area", typ: u(null, "") },
        { json: "label", js: "label", typ: "" },
        { json: "ruby", js: "ruby", typ: u(null, "") },
        { json: "count", js: "count", typ: 0 },
    ], false),
    "MainSummary": o([
        { json: "children", js: "children", typ: a(r("MainSummaryChild")) },
    ], false),
    "MainSummaryChild": o([
        { json: "attr", js: "attr", typ: "" },
        { json: "date", js: "date", typ: "" },
        { json: "value", js: "value", typ: 0 },
        { json: "children", js: "children", typ: a(r("PurpleChild")) },
    ], false),
    "PurpleChild": o([
        { json: "attr", js: "attr", typ: "" },
        { json: "value", js: "value", typ: 0 },
        { json: "children", js: "children", typ: u(undefined, a(r("FluffyChild"))) },
    ], false),
    "FluffyChild": o([
        { json: "attr", js: "attr", typ: "" },
        { json: "value", js: "value", typ: 0 },
    ], false),
    "PatientsSummary": o([
        { json: "data", js: "data", typ: a(r("PatientsSummaryDatum")) },
        { json: "date", js: "date", typ: "" },
    ], false),
    "PatientsSummaryDatum": o([
        { json: "日付", js: "日付", typ: Date },
        { json: "小計", js: "小計", typ: 0 },
    ], false),
};
