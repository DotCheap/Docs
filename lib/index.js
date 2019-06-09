/**
  * @module StagCopyLib
  *
  * 
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const UsersController = require('./Controllers/UsersController');
const EventsController = require('./Controllers/EventsController');
const AuthController = require('./Controllers/AuthController');
const DeptsController = require('./Controllers/DeptsController');
const MiscController = require('./Controllers/MiscController');
const SelfActivateDepretiatedRequest = require('./Models/SelfActivateDepretiatedRequest');
const Body = require('./Models/Body');
const CreateEventRequest = require('./Models/CreateEventRequest');
const Paginated = require('./Models/Paginated');
const CreateOneWithPassword = require('./Models/CreateOneWithPassword');
const Header = require('./Models/Header');
const EditAnEventRequest = require('./Models/EditAnEventRequest');
const Scope = require('./Models/Scope');
const Verification = require('./Models/Verification');
const LogInAuthoriseRequest = require('./Models/LogInAuthoriseRequest');
const Success = require('./Models/Success');
const FailureException = require('./Exceptions/FailureException');
const FailureOnNotActivatedUserException =
  require('./Exceptions/FailureOnNotActivatedUserException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of StagCopyLib
    Configuration,
    Environments,
    // controllers of StagCopyLib
    UsersController,
    EventsController,
    AuthController,
    DeptsController,
    MiscController,
    // models of StagCopyLib
    SelfActivateDepretiatedRequest,
    Body,
    CreateEventRequest,
    Paginated,
    CreateOneWithPassword,
    Header,
    EditAnEventRequest,
    Scope,
    Verification,
    LogInAuthoriseRequest,
    Success,
    // exceptions of StagCopyLib
    FailureException,
    FailureOnNotActivatedUserException,
    APIException,
};

module.exports = initializer;
