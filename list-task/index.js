var tasks = [
    {
      "description": "prueba 1",
      "responsible": {
        "name": "Cesar",
        "email": "cesar@gmail"
      },
      "status": "Ready"
    },
    {
        "description": "prueba 2",
        "responsible": {
          "name": "Felipe",
          "email": "felipe@gmail"
        },
        "status": "Ready"
    },
    {
        "description": "prueba 3",
        "responsible": {
          "name": "Fernando",
          "email": "Fernando@gmail"
        },
        "status": "Ready"
    },
    {
        "description": "prueba 4",
        "responsible": {
          "name": "Liuba",
          "email": "Liuba@gmail"
        },
        "status": "In progress"
    }
];
module.exports = async function (context, req) {
    context.log('getting a tasks to the planner');
    const responseMessage = { response: {tasks}};
        context.res = {
            status: 200,
            body: responseMessage
        };
}