module.exports = async function (context, req) {
    context.log('Adding a task to the planner');
    const task = req.body;
    tasks.push(task);
    const responseMessage = { response: {tasks}};
        context.res = {
            status: 201,
            body: responseMessage
        };
}
  
var tasks = [
    {
      "description": "prueba 1",
      "responsible": {
        "name": "Cesar",
        "email": "cesar@gmail"
      },
      "status": "Ready"
    }
];