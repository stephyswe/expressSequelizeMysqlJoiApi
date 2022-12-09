Project: https://github.com/trinhminhhieu/expressSequelizeMysqlJoiApi

Instructions: 

Index: 

1. Git Clone https://github.com/trinhminhhieu/expressSequelizeMysqlJoiApi.git
2. Npm Install
3. WorkBench - data import
4. Change Config Files (env/json)
5. Start app (Npm start)

1. Git Clone
git clone https://github.com/trinhminhhieu/expressSequelizeMysqlJoiApi

2. Npm Install
npm i

3. WorkBench - data import
mysql workbench:
- server - data import. 
- select mysqlDatatable/origin
- start import
- refresh schemas (right)
- (many to many) - add a row in "stories_types" table. 
e.x. 2008-12-09 00:00:00 / 2008-12-09 00:00:00 / 246 / 291 

4. Change Config Files (env/json)
app:
- change config/.env/.json files.
.json: {
  "development": {
    "username": "root",
    "password": "password",
    "database": "truyen",
    "host": "localhost",
    "dialect": "mysql"
},

.env: 
DB_USERNAME = 'root'
DB_PASS ='password'
DB_NAME = 'truyen'
DB_HOST = 'localhost'
DB_DIALECT = mysql

5. Start app (Npm start)

- npm start
- check API endpoints work

>>><<<<

Many to Many tutorial:

Index
1. Model file
2. Service file
3. Terminal - create migration file
4. Edit migration file
5. Terminal - run migrations
6. WorkBench - add many-to-many row.
7. Start App. with "npm start"
8. Check the API endpoint.




1. Model file

models/index.js
bb.stories.belongsToMany(db.storytypes, { through: 'stories_types' });
db.storytypes.belongsToMany(db.stories, { through: 'stories_types' });

2. Service file

services/storiesService.js
exports.getStories = async (id,body) => {
    try {

      //get One-To-Many relationships

      const mysdy = await db.stories.findOne({
          include: [
            {
              model: db.storyauthors,
              as: 'storyauthors',
              attributes:['storyauthorsName',] //chỉ lấy một trường trong bảng
          },
          {
            model: db.storytypes
        },
        ],
          where: { id: 246}
      })

3. Terminal - create migration file
terminal:
$ npx sequelize migration:generate --name associate-stories-storytypes

Should show:
Sequelize CLI [Node: 16.14.2, CLI: 6.2.0, ORM: 6.6.2]

migrations folder at "D:\Dev\problem-node\vietnam-mysql\migrations" already exists.
New migration was created at D:\Dev\problem-node\vietnam-mysql\migrations\20221208085250-associate-stories-storytypes.js .


4. Edit migration file

change newly created migration file to.
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // Product belongsToMany Tag
    return queryInterface.createTable(
      'stories_types',
      {
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        storyId: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
        storytypeId: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('stories_types');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

5. Terminal - create migration file
terminal:
$ npx sequelize-cli db:migrate

Should show: 

Sequelize CLI [Node: 16.14.2, CLI: 6.2.0, ORM: 6.6.2]

Loaded configuration file "config\config.json".
Using environment "development".
== 20221208085251-associate-stories-storytypes: migrating =======
== 20221208085251-associate-stories-storytypes: migrated (0.018s)

6. WorkBench - add many-to-many row.
- Select - Select Rows 100 on table: stories_types
- type a row
- e.x. 2008-12-09 00:00:00 / 2008-12-09 00:00:00 / 246 / 291 
- Press "Apply" (bottom-right) 
- Press "Apply again and Finish".

7. Start App. with "npm start"



8. Check the API endpoint.
- GET: http://localhost:3000/api/v1/book/stories
- should show a storytypes object.









