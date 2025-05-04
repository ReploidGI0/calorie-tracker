# Contador de Calorías - React + TypeScript + Vite
*📓 [Español](#inicio)*
*📓 [English](#start)*

### <a id="inicio" />
Este proyecto consiste en una aplicación web que mediante el uso de un formulario, se agregan comidas o ejercicios y las calorías aproximadas que se consumen o queman dependiendo el caso. Una vez que son agregados las comidas o ejercicios se muestra la cantidad de calorías consumidas o quemadas por hacer ejercicio y la diferencia entre estos dos valores, lo que puede facilitar ver si se está haciendo un déficit calórico. Estas "actividades" son mostradas en forma de lista y pueden ser eliminadas o modificadas en caso de haberse equivocado con algún valor. Se hace uso de localStorage, validación de formularios y modificación de valores en base a ID's.

Algunas de las cosas que se aprendieron con este proyecto son:

### <a  /> Instalación de Dependencias
A pesar de que en anteriores proyectos ya se habían instalado dependencias/frameworks de estilos como Bootstrap o Tailwind CSS. Se utilizaron nuevas dependencias en este proyecto para la creación de ID's (uuid) y uso de íconos (heroicons) 

### <a  /> useReducer
Se toma un enfoque un tanto diferente a las otras versiones del proyecto ya que se gestiona el estado del carrito en el reducer. Con los reducers se puede agrupar la lógica para que cuando se dispare (dispatch) una acción en alguna parte del proyecto se envien ciertos datos (payload) en caso de necesitarse y sean recibidos tanto dispatch como payload en el reducer y se ejecute código asignado a cada acción.

### <a  /> LocalStorage
Se utilizó localStorage para almacenar los datos de los productos agregados al carrito

### <a  /> Modularidad y Reutilización de Componentes
La reutilización de componentes en este proyecto fue esencialmente necesaria para mostrar los productos y los productos dentro del carrito, evitando código duplicado.

### <a  /> Custom Hooks
Dentro del custom hook, se encuentra la lógica para agregar, eliminar o aumentar la cantidad de elementos agregados al carrito. De igual manera se encuentran varios hooks como useEffect para la parte del localStorage, useMemo para states derivados  y useState para el carrito

### <a  /> Optimización del Rendimiento (Performance)
Además de utilizar componentes, mediante el uso de operadores ternarios, se establece si se renderiza un componente o no, lo que puede mejorar el rendimiento de las aplicaciones web.

### <a  /> Tipado Estricto con TypeScript
Se definieron tipos para los props de los componentes y funciones

### <a  /> Framework CSS
Se utilizó Bootstrap para manejar los estilos de la página

*📷[Screenshots](#screenshots)*

# Calorie Tracker - React + TypeScript + Vite

### <a id="start" />

This project consists of a web application that uses a form to add meals or exercises and the approximate calories consumed or burned, depending on the case. Once the meals or exercises are added, the number of calories consumed or burned by exercising are displayed, also displaying the difference between the consumed calories and the burned calories, which can make it easier to see if you are achieving a calorie deficit. These "activities" are displayed as a list and can be deleted or modified if a value is entered incorrectly. LocalStorage is used, along with form validation and value modification based on IDs.

Some of the things learned with this project are:

### <a  /> Installation of Dependencies
Although previous projects had already installed dependencies/style frameworks like Bootstrap or Tailwind CSS, new dependencies were used in this project for creating IDs (uuids) and using icons (heroicons).

### <a /> useReducer
This takes a slightly different approach than other versions of the project, as the cart state is managed in the reducer. With reducers, you can group logic so that when an action is triggered (dispatch) in some part of the project, certain data (payload) is sent if needed and both dispatch and payload are received in the reducer and code assigned to each action is executed.

### <a  /> LocalStorage
LocalStorage was used to store data for products added to the cart.

### <a  /> Modularity and Components Reusability
Reusing components in this project was essential to display the products and items within the cart, avoiding duplicate code.

### <a  /> Custom Hooks
Inside the custom hook is the logic for adding, removing, or increasing the number of items added to the cart. There are also several hooks, such as useEffect for the localStorage section, useMemo for derived states, and useState for the cart.

### <a  /> Performance Optimization
In addition to using components, by using ternary operators, you can set whether a component is rendered or not, which can improve the performance of web applications.

### <a  /> Strict Typing with TypeScript
Types were defined for component and function props

### <a  /> Framework CSS
Bootstrap was used to handle the page styles

---
### <a id="screenshots" /> 
# Screenshots
