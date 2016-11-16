var Ant = {};

Ant.core              = {};
Ant.core.koa            = require('koa');
Ant.core.serve          = require('koa-static');
// Ant.core.co             = require("co");
Ant.core.path           = require('path');

Ant.settings = {}
Ant.settings.PORT = 2030;
Ant.settings.STATIC 		= Ant.core.path.join(__dirname, '../javan-video-dashboard-app/build');

Ant.app                 = Ant.core.koa();
Ant.co                  = require("co");


Ant.run = function()
{
  Ant.app.use(Ant.core.serve(Ant.settings.STATIC));
  process.on('SIGTERM', function () {
    process.exit(0);
  });
  Ant.app.listen(Ant.settings.PORT);
  console.log( 'Application started on http://localhost:' +
    Ant.settings.PORT +
    '; press Ctrl-C to terminate.' );
}

Ant.run()
