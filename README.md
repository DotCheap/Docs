# Getting started

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Stag%20copy-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Stag%20copy-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `StagCopyLib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Stag%20copy-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Stag%20copy-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Stag%20copy-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Stag%20copy-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Stag copyController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Stag%20copyController)

## Initialization

### 

API client can be initialized as following:

```JavaScript
const lib = require('lib');


```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [UsersController](#users_controller)
* [EventsController](#events_controller)
* [AuthController](#auth_controller)
* [DeptsController](#depts_controller)
* [MiscController](#misc_controller)

## <a name="users_controller"></a>![Class: ](https://apidocs.io/img/class.png ".UsersController") UsersController

### Get singleton instance

The singleton instance of the ``` UsersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.UsersController;
```

### <a name="update_self_change_password"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.updateSelfChangePassword") updateSelfChangePassword

> Changes the user's password using an activation, recovery or regular token. Note that with the later, you will need to provide the "old_password" for the request to complete.


```javascript
function updateSelfChangePassword(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = '{\n\t"password": <new password>,\n\t"old_passwd": <old password>\n}';

    controller.updateSelfChangePassword(contentType, body, function(error, response, context) {

    
    });
```



### <a name="delete_by_id_delete_user"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.deleteByIDDeleteUser") deleteByIDDeleteUser

> Delete a user from his id


```javascript
function deleteByIDDeleteUser(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the user to edit |



#### Example Usage

```javascript

    var id = '<object_id>';

    controller.deleteByIDDeleteUser(id, function(error, response, context) {

    
    });
```



### <a name="get_by_id_get_user"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.getByIDGetUser") getByIDGetUser

> Returns a user informations from his ID


```javascript
function getByIDGetUser(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the user you are looking for |



#### Example Usage

```javascript

    var id = '<object_id>';

    controller.getByIDGetUser(id, function(error, response, context) {

    
    });
```



### <a name="create_one"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.createOne") createOne

> Creates a user


```javascript
function createOne(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = '{\n\t"email_addr": {{email_address}},\n\t"first_name": {{first_name}},\n\t"last_name": {{last_name}}\n}';

    controller.createOne(contentType, body, function(error, response, context) {

    
    });
```



### <a name="list_users"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.listUsers") listUsers

> Returns a list of users matching a given query


```javascript
function listUsers(gt, gte, lt, lte, select, sort, limit, page, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| gt |  ``` Required ```  | filter: greater than |
| gte |  ``` Required ```  | filter: greater than or equal |
| lt |  ``` Required ```  | filter: lesser than |
| lte |  ``` Required ```  | filter: lesser than or equal |
| select |  ``` Required ```  | fields to return |
| sort |  ``` Required ```  | fields to sort by, serparated by spaces (use dash to sort descendingly) |
| limit |  ``` Required ```  | maximum number returned by response |
| page |  ``` Required ```  | page number to return (starts at one) |



#### Example Usage

```javascript

    var gt = '{{field_name}}:{{value}}';
    var gte = '{{field_name}}:{{value}}';
    var lt = '{{field_name}}:{{value}}';
    var lte = '{{field_name}}:{{value}}';
    var select = '{{field_name_1}} {{field_name_N}}...';
    var sort = '{{field_name_ASC}} -{{field_name_DSC}}...';
    var limit = '{{number}}';
    var page = '{{number}}';

    controller.listUsers(gt, gte, lt, lte, select, sort, limit, page, function(error, response, context) {

    
    });
```



### <a name="update_by_id_change_status"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.updateByIDChangeStatus") updateByIDChangeStatus

> Changes the user status.
> To request the activation of a user, the status in the request should be 10.
> 
> ### Status Enumeration
> | Code | Description |
> | ----------- | ----------- |
> | 0 | NOT_ACTIVED |
> | 1 | ACTIVATED |
> | 10 | REQUESTED_ACTIVATION |
> | 11 | WAITING_FOR_ACTIVATION |


```javascript
function updateByIDChangeStatus(id, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the user to edit |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = '<object_id>';
    var contentType = 'application/json';
    var body = '{\n\t"status": <number>\n}';

    controller.updateByIDChangeStatus(id, contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_by_id_change_status"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.updateByIDChangeStatus") updateByIDChangeStatus

> Changes the user status.
> To request the activation of a user, the status in the request should be 10.
> 
> ### Status Enumeration
> | Code | Description |
> | ----------- | ----------- |
> | 0 | NOT_ACTIVED |
> | 1 | ACTIVATED |
> | 10 | REQUESTED_ACTIVATION |
> | 11 | WAITING_FOR_ACTIVATION |


```javascript
function updateByIDChangeStatus(id, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | ID of the user to edit |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = '<object_id>';
    var contentType = 'application/json';
    var body = '{\n\t"status": <number>\n}';

    controller.updateByIDChangeStatus(id, contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_self_activate_depretiated"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.updateSelfActivateDepretiated") updateSelfActivateDepretiated

> ### DESCRIPTION
> Request activation for a user
> 
> ### BODY EXEMPLE
> {
>     "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdGFnLmxvY2FsIiwic3ViIjoiNWNjZjA1OTQxNjkyYTg1ZTM4NWU5OGQ1Iiwic2NvcGUiOlsiYWN0aXZhdGlvbiJdLCJqdGkiOiI2MmE5Y2U2Ny02N2E0LTQzOTktYmUzOS04Yjk2MTEwMTQxNzkiLCJpYXQiOjE1NTc3NDY3MzEsImV4cCI6MTU1Nzc1MDMzMX0.N4vIpwB402ypOQRaf9MCvcBkoAtwHO0emCxl3J-c5AY"
> }


```javascript
function updateSelfActivateDepretiated(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new SelfActivateDepretiatedRequest({
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdGFnLmxvY2FsIiwic3ViIjoiNWNjZjA1OTQxNjkyYTg1ZTM4NWU5OGQ1Iiwic2NvcGUiOlsiYWN0aXZhdGlvbiJdLCJqdGkiOiI2MmE5Y2U2Ny02N2E0LTQzOTktYmUzOS04Yjk2MTEwMTQxNzkiLCJpYXQiOjE1NTc3NDY3MzEsImV4cCI6MTU1Nzc1MDMzMX0.N4vIpwB402ypOQRaf9MCvcBkoAtwHO0emCxl3J-c5AY"
});

    controller.updateSelfActivateDepretiated(contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_by_email_ask_for_password_recovery"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.createByEmailAskForPasswordRecovery") createByEmailAskForPasswordRecovery

> Generates a new "password recovery" token for the provided user.


```javascript
function createByEmailAskForPasswordRecovery(emailAddr, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| emailAddr |  ``` Required ```  | The user for which recovery is requested |



#### Example Usage

```javascript

    var emailAddr = <string>;

    controller.createByEmailAskForPasswordRecovery(emailAddr, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 403 | Forbidden |




[Back to List of Controllers](#list_of_controllers)

## <a name="events_controller"></a>![Class: ](https://apidocs.io/img/class.png ".EventsController") EventsController

### Get singleton instance

The singleton instance of the ``` EventsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.EventsController;
```

### <a name="get_all_events"></a>![Method: ](https://apidocs.io/img/method.png ".EventsController.getAllEvents") getAllEvents

> TODO: Add Description


```javascript
function getAllEvents(callback)
```

#### Example Usage

```javascript


    controller.getAllEvents(function(error, response, context) {

    
    });
```



### <a name="create_event"></a>![Method: ](https://apidocs.io/img/method.png ".EventsController.createEvent") createEvent

> TODO: Add Description


```javascript
function createEvent(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new CreateEventRequest({
  "starts_at": "2019-04-30T11:21:03.693Z",
  "ends_at": "2019-04-30T11:21:03.693Z",
  "title": "Reunion Jawa",
  "creator": "5cc82f9f9451710abfb601e9",
  "location": "SM24",
  "description": "Kappa",
  "attendees": [
    "5cc82f9f9451710abfb601e9"
  ]
});

    controller.createEvent(contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_edit_an_event"></a>![Method: ](https://apidocs.io/img/method.png ".EventsController.updateEditAnEvent") updateEditAnEvent

> TODO: Add Description


```javascript
function updateEditAnEvent(id, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = '5cefa861233ebb33a7d94999';
    var contentType = 'application/json';
    var body = new EditAnEventRequest({
  "location": "SM"
});

    controller.updateEditAnEvent(id, contentType, body, function(error, response, context) {

    
    });
```



### <a name="delete_event"></a>![Method: ](https://apidocs.io/img/method.png ".EventsController.deleteEvent") deleteEvent

> TODO: Add Description


```javascript
function deleteEvent(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = '5cefa861233ebb33a7d94999';

    controller.deleteEvent(id, function(error, response, context) {

    
    });
```



### <a name="get_all_events1"></a>![Method: ](https://apidocs.io/img/method.png ".EventsController.getAllEvents1") getAllEvents1

> TODO: Add Description


```javascript
function getAllEvents1(callback)
```

#### Example Usage

```javascript


    controller.getAllEvents1(function(error, response, context) {

    
    });
```



### <a name="create_event1"></a>![Method: ](https://apidocs.io/img/method.png ".EventsController.createEvent1") createEvent1

> TODO: Add Description


```javascript
function createEvent1(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new CreateEventRequest({
  "starts_at": "2019-04-30T11:21:03.693Z",
  "ends_at": "2019-04-30T11:21:03.693Z",
  "title": "Reunion Jawa",
  "creator": "5cc82f9f9451710abfb601e9",
  "location": "SM24",
  "description": "Kappa",
  "attendees": [
    "5cc82f9f9451710abfb601e9"
  ]
});

    controller.createEvent1(contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_edit_an_event1"></a>![Method: ](https://apidocs.io/img/method.png ".EventsController.updateEditAnEvent1") updateEditAnEvent1

> TODO: Add Description


```javascript
function updateEditAnEvent1(id, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = '5cefa861233ebb33a7d94999';
    var contentType = 'application/json';
    var body = new EditAnEventRequest({
  "location": "SM234"
});

    controller.updateEditAnEvent1(id, contentType, body, function(error, response, context) {

    
    });
```



### <a name="delete_event1"></a>![Method: ](https://apidocs.io/img/method.png ".EventsController.deleteEvent1") deleteEvent1

> TODO: Add Description


```javascript
function deleteEvent1(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = '5cefc444d104cd369e794d7b';

    controller.deleteEvent1(id, function(error, response, context) {

    
    });
```



### <a name="get_event_info_from_id"></a>![Method: ](https://apidocs.io/img/method.png ".EventsController.getEventInfoFromID") getEventInfoFromID

> TODO: Add Description


```javascript
function getEventInfoFromID(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = '5cefc445d104cd369e794d7c';

    controller.getEventInfoFromID(id, function(error, response, context) {

    
    });
```



### <a name="get_user_s_event"></a>![Method: ](https://apidocs.io/img/method.png ".EventsController.getUserSEvent") getUserSEvent

> TODO: Add Description


```javascript
function getUserSEvent(callback)
```

#### Example Usage

```javascript


    controller.getUserSEvent(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="auth_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AuthController") AuthController

### Get singleton instance

The singleton instance of the ``` AuthController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AuthController;
```

### <a name="create_log_in_authorise"></a>![Method: ](https://apidocs.io/img/method.png ".AuthController.createLogInAuthorise") createLogInAuthorise

> ### DESCRIPTION
> Get a authentification token.
> 
> ### Returns
> ```JSON
> {
> 	"token": <token>
> }
> ```


```javascript
function createLogInAuthorise(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new LogInAuthoriseRequest({
  "email_addr": "soum@yopmail.com",
  "password": "soumeya"
});

    controller.createLogInAuthorise(contentType, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 403 | Forbidden |




### <a name="create_verify"></a>![Method: ](https://apidocs.io/img/method.png ".AuthController.createVerify") createVerify

> Verify a JWT and return the parsed result.


```javascript
function createVerify(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = '{\n\t"access_token": <optional token that can also be sent via cookie>\n}';

    controller.createVerify(contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="depts_controller"></a>![Class: ](https://apidocs.io/img/class.png ".DeptsController") DeptsController

### Get singleton instance

The singleton instance of the ``` DeptsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.DeptsController;
```

### <a name="list_departments"></a>![Method: ](https://apidocs.io/img/method.png ".DeptsController.listDepartments") listDepartments

> TODO: Add Description


```javascript
function listDepartments(callback)
```

#### Example Usage

```javascript


    controller.listDepartments(function(error, response, context) {

    
    });
```



### <a name="create_one_department"></a>![Method: ](https://apidocs.io/img/method.png ".DeptsController.createOneDepartment") createOneDepartment

> TODO: Add Description


```javascript
function createOneDepartment(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = '{\n\t"name": {{string}},\n\t"supervisors": {{object_id[]}},\n\t"members": {{object_id[]}}\n}';

    controller.createOneDepartment(contentType, body, function(error, response, context) {

    
    });
```



### <a name="get_by_id_get_department"></a>![Method: ](https://apidocs.io/img/method.png ".DeptsController.getByIDGetDepartment") getByIDGetDepartment

> TODO: Add Description


```javascript
function getByIDGetDepartment(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = '{{object_id}}';

    controller.getByIDGetDepartment(id, function(error, response, context) {

    
    });
```



### <a name="delete_by_id_delete_deperment"></a>![Method: ](https://apidocs.io/img/method.png ".DeptsController.deleteByIDDeleteDeperment") deleteByIDDeleteDeperment

> TODO: Add Description


```javascript
function deleteByIDDeleteDeperment(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = '{{object_id}}';

    controller.deleteByIDDeleteDeperment(id, function(error, response, context) {

    
    });
```



### <a name="update_by_id_edit_deparment"></a>![Method: ](https://apidocs.io/img/method.png ".DeptsController.updateByIDEditDeparment") updateByIDEditDeparment

> TODO: Add Description


```javascript
function updateByIDEditDeparment(id, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = '{{object_id}}';
    var contentType = 'application/json';
    var body = '{\n\t"name": {{string}},\n\t"supervisors": {{object_id[]}},\n\t"members": {{object_id[]}}\n}';

    controller.updateByIDEditDeparment(id, contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_by_id_add_dept_members"></a>![Method: ](https://apidocs.io/img/method.png ".DeptsController.createByIDAddDeptMembers") createByIDAddDeptMembers

> TODO: Add Description


```javascript
function createByIDAddDeptMembers(id, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = '{{object_id}}';
    var contentType = 'application/json';
    var body = '{\n\t"members": {{object_id[]}}\n}';

    controller.createByIDAddDeptMembers(id, contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_by_id_edit_dept_members"></a>![Method: ](https://apidocs.io/img/method.png ".DeptsController.updateByIDEditDeptMembers") updateByIDEditDeptMembers

> TODO: Add Description


```javascript
function updateByIDEditDeptMembers(id, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = '{{object_id}}';
    var contentType = 'application/json';
    var body = '{\n\t"members": {{object_id[]}}\n}';

    controller.updateByIDEditDeptMembers(id, contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_by_id_add_dept_supervisors"></a>![Method: ](https://apidocs.io/img/method.png ".DeptsController.createByIDAddDeptSupervisors") createByIDAddDeptSupervisors

> TODO: Add Description


```javascript
function createByIDAddDeptSupervisors(id, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = '{{object_id}}';
    var contentType = 'application/json';
    var body = '{\n\t"supervisors": {{object_id[]}}\n}';

    controller.createByIDAddDeptSupervisors(id, contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_by_id_edit_dept_supervisors"></a>![Method: ](https://apidocs.io/img/method.png ".DeptsController.updateByIDEditDeptSupervisors") updateByIDEditDeptSupervisors

> TODO: Add Description


```javascript
function updateByIDEditDeptSupervisors(id, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = '{{object_id}}';
    var contentType = 'application/json';
    var body = '{\n\t"supervisors": {{object_id[]}}\n}';

    controller.updateByIDEditDeptSupervisors(id, contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="misc_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MiscController") MiscController

### Get singleton instance

The singleton instance of the ``` MiscController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MiscController;
```

### <a name="get_localhost8000_auth_test_token"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.getLocalhost8000AuthTestToken") getLocalhost8000AuthTestToken

> Get Admin Token for tests
> 
> ### Return
> ```JSON
> {
>     "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdGFnLmxvY2FsIiwic3ViIjoiNWNjZGFhMzI4YjYyZDU1MzIwM2Y5Y2MwIiwic2NvcGUiOlsicmVndWxhciJdLCJqdGkiOiI4MDU3MTY4Zi1mNWQxLTRjYTItODY1MS01ZmQ5YzNjMmUxODkiLCJpYXQiOjE1NTczMjQ5NzgsImV4cCI6MTU1NzMyODU3OH0.IBmfNqU_uLjl2rettx9InzLjuCkH1zDKp1JIH6TomVg"
> }
> ```


```javascript
function getLocalhost8000AuthTestToken(callback)
```

#### Example Usage

```javascript


    controller.getLocalhost8000AuthTestToken(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



