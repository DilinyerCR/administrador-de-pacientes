# **🏥 Administrador de Pacientes Veterinarios**

## **🐾 Gestión moderna de citas (Frontend)**

Una aplicación **frontend moderna y tipada** para la gestión de pacientes y citas veterinarias. Permite a los usuarios **agregar, editar y eliminar registros** de forma interactiva.

El proyecto está diseñado con una arquitectura **componentizada** bajo el stack **React + TypeScript**, garantizando un código robusto, escalable y una experiencia de usuario completamente **responsive**.

### **🚀 Demo y Despliegue**

| Tipo | Enlace |
| :---- | :---- |
| **Aplicación en Vivo (Demo)** | 👉 [Ver en Netlify](https://administrador-de-pacientes-cr.netlify.app/) |

### **📸 Vistazo Rápido (UX/UI)**

El diseño se enfoca en la usabilidad y una experiencia **Mobile-First** gracias a **TailwindCSS**.

| Vista Desktop | Vista Mobile |
| :---- | :---- |
| [Vista Desktop](./design/administrador-de-pacientes-desktop.png) |
| [Vista Mobile](./design/administrador-de-pacientes-mobile.png) |

### **🎯 Características Destacadas**

* **CRUD Completo y Persistente:** Funcionalidad de crear, leer, editar y eliminar registros de pacientes.  
* **Gestión de Estado Centralizada:** Usa **Zustand** para un manejo de estado global eficiente y sencillo, con persistencia de datos automática en **LocalStorage**.  
* **Notificaciones Interactivas:** Feedback visual al usuario mediante **React Toastify** para acciones como guardar, editar o eliminar.  
* **Manejo Profesional de Formularios:** Implementación avanzada de **React Hook Form** para la gestión, validación y control de errores en los formularios de registro.  
* **Responsividad con TailwindCSS:** Diseño adaptativo que garantiza la funcionalidad y estética en cualquier dispositivo (Mobile-First).

### **🛠️ Stack Tecnológico (Skills)**

Esta aplicación fue construida con tecnologías modernas y enfocada en la robustez y escalabilidad.

| Tecnología | Versión | Rol en el Proyecto |
| :---- | :---- | :---- |
| **React** | 19.1.1 | Librería principal para el UI. |
| **TypeScript** |  | **Tipado estático** para prevenir errores en tiempo de desarrollo. |
| **Zustand** | 5.0.8 | Solución de estado ligera para centralizar la lógica de pacientes. |
| **TailwindCSS** | 4.1.14 | Framework CSS para un desarrollo de estilos rápido y responsive. |
| **React Hook Form** | 7.65.0 | Gestión de estados de formularios y **validación declarativa**. |
| **React Toastify** | 11.0.5 | Notificaciones (Toasts) para feedback al usuario. |
| **UUID** | 13.0.0 | Generación de identificadores únicos para los registros de pacientes. |

### **🏗️ Arquitectura del Proyecto**

El proyecto sigue una estructura modular para mantener la separación de responsabilidades:

| Directorio | Propósito |
| :---- | :---- |
| src/components | Contiene los componentes de React, incluyendo el formulario (PatientForm.tsx) y la lista (PatientsList.tsx). |
| src/store | **Lógica de Estado Centralizada:** Incluye el *store* de Zustand (store.ts) que maneja la lógica CRUD y la persistencia. |
| src/types | **Definiciones de Tipos:** Contiene las interfaces de TypeScript (types.ts) para tipar rigurosamente los pacientes y el estado. |
| src/App.tsx | Componente principal que integra las secciones de formulario y listado. |

### **💻 Instalación y Ejecución Local**

1. **Clonar el repositorio:**  
   git clone [https://github.com/DilinyerCR/administrador-de-pacientes.git](https://github.com/DilinyerCR/administrador-de-pacientes.git)  
   cd administrador-de-pacientes

2. **Instalar dependencias:**  
   npm install

3. **Iniciar el servidor de desarrollo:**  
   npm run dev

4. La aplicación estará disponible en tu navegador en http://localhost:5173.

### **🙏 Agradecimientos y Base del Proyecto**

Este proyecto fue desarrollado como parte del curso de **Udemy: "React y TypeScript - La Guía Completa Creando +10 Proyectos"**, impartido por el profesor **Juan Pablo De la torre Valdez**.

Agradezco la calidad del contenido que sirvió como base para aplicar y profundizar mis habilidades en React y TypeScript.

### **👤 Autor y Contacto**

Este proyecto fue desarrollado por **Dilinyer Castillo** para mi portafolio, demostrando mi experticia en desarrollo frontend con React y TypeScript.

* **Portfolio Personal:** [https://portfolio-dilinyercr.netlify.app/]  
* **LinkedIn:** [https://www.linkedin.com/in/dilinyer-castillo/]  
* **GitHub:** [https://github.com/DilinyerCR]  

### **📄 Licencia**

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](./LICENSE.md) para más detalles.

⭐ Si este proyecto te resulta útil o interesante, ¡deja una estrella en el repositorio!