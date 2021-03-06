/**
 * @license
 * Copyright 2017 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Component, Input} from "@angular/core";
import {ApiDesignChange} from "../../../../models/api-design-change";
import {ICommand, MarshallUtils} from "oai-ts-commands";


@Component({
    moduleId: module.id,
    selector: "activity-item",
    templateUrl: "activity-item.component.html",
    styleUrls: ["activity-item.component.css"]
})
export class ActivityItemComponent {

    @Input() item: ApiDesignChange;
    _command: ICommand = null;

    /**
     * Constructor.
     */
    constructor() {}

    /**
     * Get the command for this change.
     * @return {any}
     */
    protected command(): ICommand {
        if (this._command == null) {
            this._command = MarshallUtils.unmarshallCommand(JSON.parse(this.item.data));
        }
        return this._command;
    }

    /**
     * Returns an appropriate icon for the activity item, based on its type.
     * @return {string}
     */
    public icon(): string {
        let rval: string = "user";
        switch (this.command()["type"]()) {
            case "AddPathItemCommand_20":
            case "AddPathItemCommand_30":
            case "AddSchemaDefinitionCommand_20":
            case "AddSchemaDefinitionCommand_30":
                rval = "plus";
                break;
            case "ChangeContactCommand_20":
            case "ChangeContactCommand_30":
                rval = "id-card-o";
                break;
            case "ChangeDescriptionCommand_20":
            case "ChangeDescriptionCommand_30":
                rval = "pencil-square-o";
                break;
            case "ChangeLicenseCommand_20":
            case "ChangeLicenseCommand_30":
                rval = "copyright";
                break;
            case "ChangeMediaTypeTypeCommand":
            case "ChangeParameterDefinitionTypeCommand_20":
            case "ChangeParameterDefinitionTypeCommand_30":
            case "ChangeParameterTypeCommand_20":
            case "ChangeParameterTypeCommand_30":
            case "ChangePropertyTypeCommand_20":
            case "ChangePropertyTypeCommand_30":
            case "ChangeResponseTypeCommand_20":
            case "ChangeResponseDefinitionTypeCommand_20":
                rval = "info";
                break;
            case "ChangePropertyCommand_20":
            case "ChangePropertyCommand_30":
            case "ChangeSecuritySchemeCommand_20":
            case "ChangeSecuritySchemeCommand_30":
            case "ChangeServerCommand":
            case "ChangeTitleCommand_20":
            case "ChangeTitleCommand_30":
            case "ChangeVersionCommand_20":
            case "ChangeVersionCommand_30":
                rval = "pencil";
                break;
            case "DeleteAllParametersCommand_20":
            case "DeleteAllParametersCommand_30":
            case "DeleteAllPropertiesCommand_20":
            case "DeleteAllPropertiesCommand_30":
            case "DeleteMediaTypeCommand":
            case "DeleteOperationCommand_20":
            case "DeleteOperationCommand_30":
            case "DeleteParameterCommand_20":
            case "DeleteParameterCommand_30":
            case "DeletePathCommand_20":
            case "DeletePathCommand_30":
            case "DeletePropertyCommand_20":
            case "DeletePropertyCommand_30":
            case "DeleteResponseCommand_20":
            case "DeleteResponseCommand_30":
            case "DeleteSchemaDefinitionCommand_20":
            case "DeleteSchemaDefinitionCommand_30":
            case "DeleteSecuritySchemeCommand_20":
            case "DeleteSecuritySchemeCommand_30":
            case "DeleteServerCommand":
            case "DeleteTagCommand_20":
            case "DeleteTagCommand_30":
            case "DeleteRequestBodyCommand_30":
            case "DeleteAllResponsesCommand_20":
            case "DeleteAllResponsesCommand_30":
            case "DeleteContactCommand_20":
            case "DeleteContactCommand_30":
            case "DeleteLicenseCommand_20":
            case "DeleteLicenseCommand_30":
                rval = "trash-o";
                break;
            case "NewMediaTypeCommand":
            case "NewOperationCommand_20":
            case "NewOperationCommand_30":
            case "NewParamCommand_20":
            case "NewParamCommand_30":
            case "NewPathCommand_20":
            case "NewPathCommand_30":
            case "NewRequestBodyCommand_20":
            case "NewRequestBodyCommand_30":
            case "NewResponseCommand_20":
            case "NewResponseCommand_30":
            case "NewSchemaDefinitionCommand_20":
            case "NewSchemaDefinitionCommand_30":
            case "NewSchemaPropertyCommand_20":
            case "NewSchemaPropertyCommand_30":
            case "NewSecuritySchemeCommand_20":
            case "NewSecuritySchemeCommand_30":
                rval = "plus";
                break;
            case "NewServerCommand":
                rval = "server";
                break;
            case "NewTagCommand_20":
            case "NewTagCommand_30":
                rval = "tag";
                break;
            case "ReplaceOperationCommand_20":
            case "ReplaceOperationCommand_30":
            case "ReplacePathItemCommand_20":
            case "ReplacePathItemCommand_30":
            case "ReplaceSchemaDefinitionCommand_20":
            case "ReplaceSchemaDefinitionCommand_30":
                rval = "code";
                break;
            default:
                rval = "question";
        }
        return rval;
    }

    /**
     * Returns an appropriate description for the activity item, based on its type.
     * @return {string}
     */
    public description(): string {
        let rval: string = "user";
        switch (this.command()["type"]()) {
            case "AddPathItemCommand_20":
            case "AddPathItemCommand_30":
                rval = "added a Path Item named " + this.command()["_newPathItemName"] + ".";
                break;
            case "AddSchemaDefinitionCommand_20":
            case "AddSchemaDefinitionCommand_30":
                rval = "added a Schema Definition named " + this.command()["_newDefinitionName"] + ".";
                break;
            case "ChangeContactCommand_20":
            case "ChangeContactCommand_30":
                rval = "altered the API's Contact information.";
                break;
            case "ChangeDescriptionCommand_20":
            case "ChangeDescriptionCommand_30":
                rval = "altered the API's description.";
                break;
            case "ChangeLicenseCommand_20":
            case "ChangeLicenseCommand_30":
                rval = "changed the API's license to " + this.command()["_newLicenseUrl"] + ".";
                break;
            case "ChangeMediaTypeTypeCommand":
                rval = "modified a Media Type (for node " + this.command()["_mediaTypePath"] + ").";
                break;
            case "ChangeParameterDefinitionTypeCommand_20":
            case "ChangeParameterDefinitionTypeCommand_30":
            case "ChangeParameterTypeCommand_20":
            case "ChangeParameterTypeCommand_30":
                rval = "changed the type of a Parameter at location " + this.command()["_paramPath"] + ".";
                break;
            case "ChangePropertyTypeCommand_20":
            case "ChangePropertyTypeCommand_30":
                rval = "changed the type of the Schema Property named '" + this.command()["_propName"] + "' at location " + this.command()["_propPath"] + ".";
                break;
            case "ChangeResponseTypeCommand_20":
            case "ChangeResponseDefinitionTypeCommand_20":
                rval = "changed the type of an operation Response at location " + this.command()["_responsePath"] + ".";
                break;
            case "ChangePropertyCommand_20":
            case "ChangePropertyCommand_30":
                rval = "changed the value of property '" + this.command()["_property"] + "' at location " + this.command()["_nodePath"] + ".";
                break;
            case "ChangeSecuritySchemeCommand_20":
            case "ChangeSecuritySchemeCommand_30":
                rval = "modified the details of Security Scheme named '" + this.command()["_schemeName"] + "'.";
                break;
            case "ChangeServerCommand":
                rval = "modified the details of Server '" + this.command()["_serverUrl"] + "' at location " + this.command()["_parentPath"] + ".";
                break;
            case "ChangeTitleCommand_20":
            case "ChangeTitleCommand_30":
                rval = "altered the API's title to '" + this.command()["_newTitle"] + "'";
                break;
            case "ChangeVersionCommand_20":
            case "ChangeVersionCommand_30":
                rval = "altered the API's version to '" + this.command()["_newVersion"] + "'";
                break;
            case "DeleteAllParametersCommand_20":
            case "DeleteAllParametersCommand_30":
                rval = "deleted all of the " + this.command()["_paramType"] + " style parameters at location " + this.command()["_parentPath"] + ".";
                break;
            case "DeleteAllPropertiesCommand_20":
            case "DeleteAllPropertiesCommand_30":
                rval = "deleted all of the Schema properties at location " + this.command()["_schemaPath"] + ".";
                break;
            case "DeleteMediaTypeCommand":
                rval = "deleted Media Type '" + this.command()["_mediaTypeName"] + "' at location " + this.command()["_mediaTypePath"] + ".";
                break;
            case "DeleteOperationCommand_20":
            case "DeleteOperationCommand_30":
                rval = "deleted the '" + this.command()["_property"] + "' Operation at location " + this.command()["_parentPath"] + ".";
                break;
            case "DeleteParameterCommand_20":
            case "DeleteParameterCommand_30":
                rval = "deleted a parameter at location " + this.command()["_parameterPath"] + ".";
                break;
            case "DeletePathCommand_20":
            case "DeletePathCommand_30":
                rval = "deleted a Path Item named '" + this.command()["_path"] + "'.";
                break;
            case "DeletePropertyCommand_20":
            case "DeletePropertyCommand_30":
                rval = "deleted a Property named '" + this.command()["_propertyName"] + "' at location " + this.command()["_propertyPath"] + ".";
                break;
            case "DeleteResponseCommand_20":
            case "DeleteResponseCommand_30":
                rval = "deleted a Response with code '" + this.command()["_responseCode"] + "' at location " + this.command()["_responsePath"] + ".";
                break;
            case "DeleteSchemaDefinitionCommand_20":
            case "DeleteSchemaDefinitionCommand_30":
                rval = "deleted the Schema Definition named '" + this.command()["_definitionName"] + "'.";
                break;
            case "DeleteSecuritySchemeCommand_20":
            case "DeleteSecuritySchemeCommand_30":
                rval = "deleted the Security Scheme named '" + this.command()["_schemeName"] + "'.";
                break;
            case "DeleteServerCommand":
                rval = "deleted a Server with url '" + this.command()["_serverUrl"] + "' at location " + this.command()["_parentPath"] + ".";
                break;
            case "DeleteTagCommand_20":
            case "DeleteTagCommand_30":
                rval = "deleted the global Tag definition with name '" + this.command()["_tagName"] + "'.";
                break;
            case "DeleteRequestBodyCommand_30":
                rval = "deleted the global Tag definition with name '" + this.command()["_tagName"] + "'.";
                break;
            case "DeleteAllResponsesCommand_20":
            case "DeleteAllResponsesCommand_30":
                rval = "deleted all of the Responses at location " + this.command()["_parentPath"] + ".";
                break;
            case "DeleteContactCommand_20":
            case "DeleteContactCommand_30":
                rval = "deleted the API's Contact information.";
                break;
            case "DeleteLicenseCommand_20":
            case "DeleteLicenseCommand_30":
                rval = "deleted the API's License information.";
                break;
            case "NewMediaTypeCommand":
                rval = "added a new Media Type named '" + this.command()["_newMediaType"] + "' at location " + this.command()["_nodePath"] + ".";
                break;
            case "NewOperationCommand_20":
            case "NewOperationCommand_30":
                rval = "added a new Operation named '" + this.command()["_method"] + "' at location " + this.command()["_path"] + ".";
                break;
            case "NewParamCommand_20":
            case "NewParamCommand_30":
                rval = "added a new Parameter named '" + this.command()["_paramName"] + "' at location " + this.command()["_parentPath"] + ".";
                break;
            case "NewPathCommand_20":
            case "NewPathCommand_30":
                rval = "added a new Path named '" + this.command()["_newPath"] + "'.";
                break;
            case "NewRequestBodyCommand_20":
            case "NewRequestBodyCommand_30":
                rval = "added a Request Body for Operation at location  " + this.command()["_operationPath"] + ".";
                break;
            case "NewResponseCommand_20":
            case "NewResponseCommand_30":
                rval = "added a new Response for response code '" + this.command()["_statusCode"] + "' for Operation at location " + this.command()["_operationPath"] + ".";
                break;
            case "NewSchemaDefinitionCommand_20":
            case "NewSchemaDefinitionCommand_30":
                rval = "added a new Schema Definition for response code '" + this.command()["_statusCode"] + "' for Operation at location " + this.command()["_operationPath"] + ".";
                break;
            case "NewSchemaPropertyCommand_20":
            case "NewSchemaPropertyCommand_30":
                rval = "added a new Schema Property named '" + this.command()["_propertyName"] + "' at location " + this.command()["_schemaPath"] + ".";
                break;
            case "NewSecuritySchemeCommand_20":
            case "NewSecuritySchemeCommand_30":
                rval = "added a new Security Scheme named '" + this.command()["_schemeName"] + "'.";
                break;
            case "NewServerCommand":
                rval = "added a new Server with url '" + this.command()["_server"].url + "' at location " + this.command()["_parentPath"] + ".";
                break;
            case "NewTagCommand_20":
            case "NewTagCommand_30":
                rval = "added a new Security Scheme named '" + this.command()["_tagName"] + "'.";
                break;
            case "ReplaceOperationCommand_20":
            case "ReplaceOperationCommand_30":
                rval = "fully replaced the source for Operation '" + this.command()["_method"] + "' at location " + this.command()["_path"] + ".";
                break;
            case "ReplacePathItemCommand_20":
            case "ReplacePathItemCommand_30":
                rval = "fully replaced the source for Path '" + this.command()["_pathName"] + "'.";
                break;
            case "ReplaceSchemaDefinitionCommand_20":
            case "ReplaceSchemaDefinitionCommand_30":
                rval = "fully replaced the source for Schema Definition '" + this.command()["_defName"] + "'.";
                break;
            default:
                console.info("[ActivityItemComponent] WARNING - unhandled change item type: %s", this.command()["type"]());
                rval = "performed some unknown action...";
        }
        return rval;
    }

}
