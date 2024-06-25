import NextAPI as API
import sys

JsPath = sys.argv[1]

def Build():
    global JsPath

    Content = API.ConnectXML('Content.xml')
    Application = API.Application(Content)

    Application.build(JsPath)

if __name__ == "__main__":
    Build()