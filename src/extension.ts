'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    let schemas: object[] = getSchemaList();

    let personalSchemas: object[] = vscode.workspace.getConfiguration("json").get('personalSchemas');
    personalSchemas.forEach(schema => schemas.push(schema));

    insertSchemasInOptions(schemas);
}

// this method is called when your extension is deactivated
export function deactivate() {
}

export function getSchemaList(): object[] {
    return [
        {
            "fileMatch": [
                "/**/.angular-cli.json"
            ],
            "url": "https://raw.githubusercontent.com/angular/angular-cli/master/packages/@angular/cli/lib/config/schema.json"
        },
        {
            "fileMatch": [
                "/**/apple-app-site-association"
            ],
            "url": "http://json.schemastore.org/apple-app-site-association"
        },
        {
            "fileMatch": [
                "/**/babelrc.json",
                "/**/.babelrc"
            ],
            "url": "http://json.schemastore.org/babelrc"
        },
        {
            "fileMatch": [
                "/**/.bootstraprc"
            ],
            "url": "http://json.schemastore.org/bootstraprc"
        },
        {
            "fileMatch": [
                "/**/bower.json"
            ],
            "url": "http://json.schemastore.org/bower"
        },
        {
            "fileMatch": [
                "/**/.bowerrc"
            ],
            "url": "http://json.schemastore.org/bowerrc"
        },
        {
            "fileMatch": [
                "/**/bundleconfig.json"
            ],
            "url": "http://json.schemastore.org/bundleconfig"
        },
        {
            "fileMatch": [
                "/**/compilerconfig.json"
            ],
            "url": "http://json.schemastore.org/compilerconfig"
        },
        {
            "fileMatch": [
                "/**/commands.json"
            ],
            "url": "http://json.schemastore.org/commands"
        },
        {
            "fileMatch": [
                "/**/chutzpah.json"
            ],
            "url": "http://json.schemastore.org/chutzpah"
        },
        {
            "fileMatch": [
                "/**/coffeelint.json"
            ],
            "url": "http://json.schemastore.org/coffeelint"
        },
        {
            "fileMatch": [
                "/**/composer.json"
            ],
            "url": "http://json.schemastore.org/composer"
        },
        {
            "fileMatch": [
                "/**/component.json"
            ],
            "url": "http://json.schemastore.org/component"
        },
        {
            "fileMatch": [
                "/**/config.json"
            ],
            "url": "http://json.schemastore.org/config"
        },
        {
            "fileMatch": [
                "/**/contribute.json"
            ],
            "url": "http://json.schemastore.org/contribute"
        },
        {
            "fileMatch": [
                "/**/.csscomb.json"
            ],
            "url": "http://json.schemastore.org/csscomb"
        },
        {
            "fileMatch": [
                "/**/.csslintrc"
            ],
            "url": "http://json.schemastore.org/csslintrc"
        },
        {
            "fileMatch": [
                "/**/debugsettings.json"
            ],
            "url": "http://json.schemastore.org/launchsettings"
        },
        {
            "fileMatch": [
                "/**/docfx.json"
            ],
            "url": "http://json.schemastore.org/docfx"
        },
        {
            "fileMatch": [
                "/**/dotnetcli.host.json"
            ],
            "url": "http://json.schemastore.org/dotnetcli.host"
        },
        {
            "fileMatch": [
                "/**/epr-manifest.json"
            ],
            "url": "http://json.schemastore.org/epr-manifest"
        },
        {
            "fileMatch": [
                "/**/.eslintrc"
            ],
            "url": "http://json.schemastore.org/eslintrc"
        },
        {
            "fileMatch": [
                "/**/function.json"
            ],
            "url": "http://json.schemastore.org/function"
        },
        {
            "fileMatch": [
                "/**/geojson.json"
            ],
            "url": "http://json.schemastore.org/geojson"
        },
        {
            "fileMatch": [
                "/**/global.json"
            ],
            "url": "http://json.schemastore.org/global"
        },
        {
            "fileMatch": [
                "/**/haxelib.json"
            ],
            "url": "http://json.schemastore.org/haxelib"
        },
        {
            "fileMatch": [
                "/**/host.json"
            ],
            "url": "http://json.schemastore.org/host"
        },
        {
            "fileMatch": [
                "/**/host-meta.json"
            ],
            "url": "http://json.schemastore.org/host-meta"
        },
        {
            "fileMatch": [
                "/**/.htmlhintrc"
            ],
            "url": "http://json.schemastore.org/htmlhint"
        },
        {
            "fileMatch": [
                "/**/.jsbeautifyrc"
            ],
            "url": "http://json.schemastore.org/jsbeautifyrc"
        },
        {
            "fileMatch": [
                "/**/.jsbeautifyrc-nested"
            ],
            "url": "http://json.schemastore.org/jsbeautifyrc-nested"
        },
        {
            "fileMatch": [
                "/**/.jscsrc"
            ],
            "url": "http://json.schemastore.org/jscsrc"
        },
        {
            "fileMatch": [
                "/**/.jshintrc"
            ],
            "url": "http://json.schemastore.org/jshintrc"
        },
        {
            "fileMatch": [
                "/**/.jsinspectrc"
            ],
            "url": "http://json.schemastore.org/jsinspectrc"
        },
        {
            "fileMatch": [
                "/**/*.jsonld"
            ],
            "url": "http://json.schemastore.org/jsonld"
        },
        {
            "fileMatch": [
                "/**/jsconfig.json"
            ],
            "url": "http://json.schemastore.org/jsconfig"
        },
        {
            "fileMatch": [
                "/**/launchsettings.json"
            ],
            "url": "http://json.schemastore.org/launchsettings"
        },
        {
            "fileMatch": [
                "/**/library.json"
            ],
            "url": "http://json.schemastore.org/library"
        },
        {
            "fileMatch": [
                "/**/mimetypes.json"
            ],
            "url": "http://json.schemastore.org/mimetypes"
        },
        {
            "fileMatch": [
                "/**/.modernizrrc"
            ],
            "url": "http://json.schemastore.org/modernizrrc"
        },
        {
            "fileMatch": [
                "/**/mycode.json"
            ],
            "url": "http://json.schemastore.org/mycode"
        },
        {
            "fileMatch": [
                "/**/nuget-project.json"
            ],
            "url": "http://json.schemastore.org/nuget-project"
        },
        {
            "fileMatch": [
                "/**/openfin.json"
            ],
            "url": "http://json.schemastore.org/openfin"
        },
        {
            "fileMatch": [
                "/**/package.json"
            ],
            "url": "http://json.schemastore.org/package"
        },
        {
            "fileMatch": [
                "/**/package.manifest"
            ],
            "url": "http://json.schemastore.org/package.manifest"
        },
        {
            "fileMatch": [
                "/**/pattern.json"
            ],
            "url": "http://json.schemastore.org/pattern"
        },
        {
            "fileMatch": [
                "/**/prettierrc.json"
            ],
            "url": "http://json.schemastore.org/prettierrc"
        },
        {
            "fileMatch": [
                "/**/project.json"
            ],
            "url": "http://json.schemastore.org/project"
        },
        {
            "fileMatch": [
                "/**/project-1.0.0-beta3.json"
            ],
            "url": "http://json.schemastore.org/project-1.0.0-beta3"
        },
        {
            "fileMatch": [
                "/**/project-1.0.0-beta4.json"
            ],
            "url": "http://json.schemastore.org/project-1.0.0-beta4"
        },
        {
            "fileMatch": [
                "/**/project-1.0.0-beta5.json"
            ],
            "url": "http://json.schemastore.org/project-1.0.0-beta5"
        },
        {
            "fileMatch": [
                "/**/project-1.0.0-beta6.json"
            ],
            "url": "http://json.schemastore.org/project-1.0.0-beta6"
        },
        {
            "fileMatch": [
                "/**/project-1.0.0-beta8.json"
            ],
            "url": "http://json.schemastore.org/project-1.0.0-beta8"
        },
        {
            "fileMatch": [
                "/**/project-1.0.0-rc1.json"
            ],
            "url": "http://json.schemastore.org/project-1.0.0-rc1"
        },
        {
            "fileMatch": [
                "/**/project-1.0.0-rc2.json"
            ],
            "url": "http://json.schemastore.org/project-1.0.0-rc2"
        },
        {
            "fileMatch": [
                "/**/proxies.json"
            ],
            "url": "http://json.schemastore.org/proxies"
        },
        {
            "fileMatch": [
                "/**/*.resjson"
            ],
            "url": "http://json.schemastore.org/resjson"
        },
        {
            "fileMatch": [
                "/**/sarif-1.0.0.json"
            ],
            "url": "http://json.schemastore.org/sarif"
        },
        {
            "fileMatch": [
                "/**/sarif-1.0.0.json"
            ],
            "url": "http://json.schemastore.org/sarif-1.0.0.json"
        },
        {
            "fileMatch": [
                "/**/sarif-1.0.0-beta.5.json"
            ],
            "url": "http://json.schemastore.org/sarif-1.0.0-beta.5.json"
        },
        {
            "fileMatch": [
                "/**/sarif-1.0.0-beta.4.json"
            ],
            "url": "http://json.schemastore.org/sarif-1.0.0-beta.4.json"
        },
        {
            "fileMatch": [
                "/**/settings.job"
            ],
            "url": "http://json.schemastore.org/settings.job"
        },
        {
            "fileMatch": [
                "/**/.stylelintrc"
            ],
            "url": "http://json.schemastore.org/stylelintrc"
        },
        {
            "fileMatch": [
                "/**/template.json"
            ],
            "url": "http://json.schemastore.org/template"
        },
        {
            "fileMatch": [
                "/**/templatsources.json"
            ],
            "url": "http://json.schemastore.org/templatesources"
        },
        {
            "fileMatch": [
                "/**/tsconfig.json"
            ],
            "url": "http://json.schemastore.org/tsconfig"
        },
        {
            "fileMatch": [
                "/**/tsd.json"
            ],
            "url": "http://json.schemastore.org/tsd"
        },
        {
            "fileMatch": [
                "/**/tsdrc.json"
            ],
            "url": "http://json.schemastore.org/tsdrc"
        },
        {
            "fileMatch": [
                "/**/tslint.json"
            ],
            "url": "http://json.schemastore.org/tslint"
        },
        {
            "fileMatch": [
                "/**/typings.json"
            ],
            "url": "http://json.schemastore.org/typings"
        },
        {
            "fileMatch": [
                "/**/typingsrc.json"
            ],
            "url": "http://json.schemastore.org/typingsrc"
        },
        {
            "fileMatch": [
                "/**/vega.json"
            ],
            "url": "http://json.schemastore.org/vega"
        },
        {
            "fileMatch": [
                "/**/vega-lite.json"
            ],
            "url": "http://json.schemastore.org/vega-lite"
        },
        {
            "fileMatch": [
                "/**/version.json"
            ],
            "url": "https://raw.githubusercontent.com/AArnott/Nerdbank.GitVersioning/master/src/NerdBank.GitVersioning/version.schema.json"
        },
        {
            "fileMatch": [
                "/**/webjobs-list.json"
            ],
            "url": "http://json.schemastore.org/webjobs-list"
        },
        {
            "fileMatch": [
                "/**/webjobpublishsettings.json"
            ],
            "url": "http://json.schemastore.org/webjob-publish-settings"
        },
        {
            "fileMatch": [
                "/**/vs-2017.3.host.json"
            ],
            "url": "http://json.schemastore.org/vs-2017.3.host"
        },
        {
            "fileMatch": [
                "/**/xunit.runner.json"
            ],
            "url": "http://json.schemastore.org/xunit.runner.schema"
        }
    ];
}

export function insertSchemasInOptions(schemas: object[]):Thenable<void> {
    return vscode.workspace
        .getConfiguration('json')
        .update('schemas', schemas, true);
}
