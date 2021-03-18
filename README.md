# IETI-LAB-7
# Código de Honor

Debes seguir el Código de honor del ingeniero de sistemas para defender el estándar de integridad académica de la ECI:

* Tus respuestas a tareas, cuestionarios y exámenes deben ser tu propio trabajo (excepto para las tareas que permiten explícitamente la colaboración).

* No puedes compartir tus soluciones de tareas, cuestionarios o exámenes con otra persona a menos que el instructor lo permita explícitamente. Esto incluye cualquier cosa escrita por ti, como también cualquier solución oficial proporcionada por el docente o el monitor del curso.

* No puedes participar en otras actividades que mejorarán de manera deshonesta tus resultados o que mejorarán de manera deshonesta o dañarán los resultados de otras personas.


#add task - list task APP

In the web console, click on the Refresh button. You should see the function deployed.


![image](https://github.com/csarssj/IETI-LAB-7/blob/main/img/azure.png)

![image](https://github.com/csarssj/IETI-LAB-7/blob/main/img/azure1.png)

Click on the add-task link and use the Get Function Url to get the URL of your Azure function. Test it!

#POST

Create a subfolder named add-task and create a file named index.js. The file should export a function implementing the logic for adding a task. It gets two arguments: a context object where you can send the response of your function and the req object where the payload of the request is received. In the req.body object you will get the body of your request with the fields of a task to be created.

![image](https://github.com/csarssj/IETI-LAB-7/blob/main/img/post.png)

#GET

Create a subfolder named list-tasks and implement the function for returning the list of tasks following the same steps of the part 1. It should use the HTTP Get method and return a 200 status.

![image](https://github.com/csarssj/IETI-LAB-7/blob/main/img/get.png)


# Authors

[César González](https://github.com/csarssj) 

_Fecha : 18 de marzo del 2021_ 
# Despliegue
*add-task* (https://aqueous-brook-11783.herokuapp.com/user)

*list-task* (https://aqueous-brook-11783.herokuapp.com/user)
