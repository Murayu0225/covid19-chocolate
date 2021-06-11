import os
import time

from selenium import webdriver

if not os.path.exists("ogp"):
    os.mkdir("ogp")

PATHS = {
    "/?dummy": (959, 500),
    "/cards/details-of-confirmed-cases": (959, 500),
    "/cards/number-of-confirmed-cases": (959, 500),
    "/cards/positive-number-by-diagnosed-date":(959, 730),
    "/cards/monitoring-number-of-confirmed-cases": (959, 500),
    "/cards/monitoring-items-overview": (959, 570),
    "/cards/number-of-confirmed-cases-by-municipalities": (959, 570),
    "/cards/positive-number-by-developed-date": (959, 570),
    "/cards/deaths-by-death-date": (959, 570),
    "/cards/number-of-confirmed-cases-by-age": (959, 570),
}

options = webdriver.ChromeOptions()
options.add_argument("--headless")
options.add_argument("--hide-scrollbars")

driver = webdriver.Chrome(options=options)

for lang in ("ja", "en", "zh-cn", "zh-tw", "ko"):
    if not os.path.exists("ogp/{}".format(lang)):
        os.mkdir("ogp/{}".format(lang))
    for path, size in PATHS.items():
        driver.set_window_size(*size)
        driver.get(
            "http://localhost:8000{}?ogp=true".format(
                path if lang == "ja" else "/{}{}".format(lang, path)
            )
        )
        path = path.replace("/cards/", "").replace("/", "_")
        if ('heatmap' in path):
            time.sleep(20)
        driver.save_screenshot(
            "ogp/{}.png".format(
                path if lang == "ja" else "{}/{}".format(lang, path)
            )
        )
