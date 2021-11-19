const express = require('express');
const baseballpitchCtrl = require('../controllers/baseball-pitch.controller');
const authorize = require('../helpers/authorize');
const router = express.Router();
const Role = require('../models/role')


router
    .route('/')
    .get(baseballpitchCtrl.list)
    /** POST /api/baseballpitchs Create new baseballpitch */
    .post(authorize(Role.User), baseballpitchCtrl.create);

/**
 * @swagger
 * path:
 *  /baseballpitch/random:
 *    get:
 *      summary: Gets a random baseball pitch
 *      security:
 *          - BearerAuth: []
 *      tags: [BaseballPitch]
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BaseballPitch'
 */

 router.route('/random')
    .get(baseballpitchCtrl.get_random)



/**
 * @swagger
 * path:
 *  /baseballpitch:
 *    get:
 *      summary: Gets a list of all pitches limited by page and pagesize
 *      security:
 *          - BearerAuth: []
 *      tags: [BaseballPitch]
 *      parameters:
 *        - in: query
 *          name: page
 *          schema:
 *            type: integer
 *            default: 0
 *          description: Page number to start from default is 0
 *        - in: query
 *          name: pageSize
 *          schema:
 *            type: integer
 *            default: 30
 *          description: Limit the number of items in each page. Default is 30
 *      responses:
 *        "200":
 *          description: Got the baseballpitchs
 *          content:
 *            application/json:
 *              schema:
 *                type: "array"
 *                items:
 *                  $ref: '#/components/schemas/BaseballPitch'
 */

/**
 * @swagger
 * path:
 *  /baseballpitch:
 *    post:
 *      summary: Creates Baseball Pitch
 *      tags: [BaseballPitch]
 *      security:
 *          - BearerAuth: []           
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                  - pitch_type
 *                  - response_id
 *              properties:
 *                  pitch_type:
 *                      type: string
 *                  response_id:
 *                      type: string
 *                  description:
 *                      type: string
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BaseballPitch'
 */

/**
 * @swagger
 * path:
 *  /baseballpitch/single/{id}:
 *    get:
 *      summary: Gets a baseball pitch by id
 *      security:
 *          - BearerAuth: []
 *      tags: [BaseballPitch]
 *      parameters:
 *          - name: "id"
 *            in: "path"
 *            description: "Id of baseballpitch"
 *            required: true
 *            type: "integer"
 *            format: "int64"
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BaseballPitch'
 */


/**
 * @swagger
 * path:
 *  /baseballpitch/single/{id}:
 *    put:
 *      summary: Updates the baseball pitch
 *      tags: [BaseballPitch]
 *      security:
 *          - BearerAuth: []
 *      parameters:
 *          - name: "id"
 *            in: "path"
 *            description: "Id of baseballpitch"
 *            required: true
 *            type: "integer"
 *            format: "int64"          
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                  - name
 *                  - nameNepali
 *              properties:
 *                  name:
 *                      type: string
 *                  nameNepali:
 *                      type: string
 *                  description:
 *                      type: string
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BaseballPitch'
 */

/**
 * @swagger
 * path:
 *  /baseballpitch/single/{id}:
 *    delete:
 *      summary: Deletes a baseballpitch by id
 *      security:
 *          - BearerAuth: []
 *      tags: [BaseballPitch]
 *      parameters:
 *          - name: "id"
 *            in: "path"
 *            description: "Id of baseballpitch"
 *            required: true
 *            type: "integer"
 *            format: "int64"
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BaseballPitch'
 */


router.route('/single/:id')
    .get(baseballpitchCtrl.get)
    /** PUT /api/users/:userId - Update user */
    .put(authorize(Role.Admin), baseballpitchCtrl.update)
    /** DELETE /api/users/:userId - Delete user */
    .delete(authorize(Role.Admin), baseballpitchCtrl.remove);







module.exports = router;