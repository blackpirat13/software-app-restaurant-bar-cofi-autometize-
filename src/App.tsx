import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

const definicionDiagrama = `
flowchart TD
    A[Inicio] --> B[Recopilar Datos del Cliente]
    B --> C[Preprocesar Datos]
    C --> D[Ingeniería de Características]
    D --> E[Entrenar Modelo de Aprendizaje Automático]
    E --> F[Generar Recomendaciones]
    F --> G[Presentar Recomendaciones al Cliente]
    G --> H[Recopilar Retroalimentación]
    H --> I[Actualizar Modelo]
    I --> J[Fin]

    subgraph Recopilación de Datos
    B --> B1[Historial de Pedidos]
    B --> B2[Preferencias Culinarias]
    B --> B3[Alergias]
    B --> B4[Restricciones Dietéticas]
    end

    subgraph Preprocesamiento
    C --> C1[Limpieza de Datos]
    C --> C2[Normalización de Datos]
    C --> C3[Manejo de Valores Faltantes]
    end

    subgraph Ingeniería de Características
    D --> D1[Extraer Características Relevantes]
    D --> D2[Crear Incrustaciones]
    D --> D3[Reducción de Dimensionalidad]
    end

    subgraph Entrenamiento del Modelo
    E --> E1[Dividir Datos]
    E --> E2[Elegir Algoritmo]
    E --> E3[Entrenar Modelo]
    E --> E4[Validar Modelo]
    end

    subgraph Generación de Recomendaciones
    F --> F1[Aplicar Modelo a Datos del Usuario]
    F --> F2[Clasificar Recomendaciones]
    F --> F3[Filtrar Según Restricciones]
    end

    subgraph Ciclo de Retroalimentación
    H --> H1[Recopilar Calificaciones de Usuarios]
    H --> H2[Seguimiento de Confirmaciones de Pedidos]
    I --> I1[Reentrenar Modelo Periódicamente]
    I --> I2[Ajustar Hiperparámetros]
    end
`;

function App() {
  const mermaidRef = useRef(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.run();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Diagrama de Flujo del Sistema de Recomendación de Platos Personalizado</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg overflow-auto">
        <div className="mermaid" ref={mermaidRef}>
          {definicionDiagrama}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Desafíos Potenciales y Soluciones</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Desafío:</strong> Problema de inicio en frío para nuevos usuarios
            <br />
            <strong>Solución:</strong> Implementar un cuestionario para nuevos usuarios para recopilar preferencias iniciales y utilizar técnicas de filtrado colaborativo
          </li>
          <li>
            <strong>Desafío:</strong> Manejo de grandes volúmenes de datos en tiempo real
            <br />
            <strong>Solución:</strong> Utilizar frameworks de computación distribuida como Apache Spark e implementar mecanismos de caché eficientes
          </li>
          <li>
            <strong>Desafío:</strong> Garantizar la privacidad y seguridad de los datos
            <br />
            <strong>Solución:</strong> Implementar encriptación robusta, técnicas de anonimización y cumplir con las regulaciones de protección de datos (por ejemplo, RGPD)
          </li>
          <li>
            <strong>Desafío:</strong> Mantener las recomendaciones diversas y evitar burbujas de filtro
            <br />
            <strong>Solución:</strong> Incorporar métricas de diversidad en el algoritmo de recomendación e introducir periódicamente elementos novedosos
          </li>
          <li>
            <strong>Desafío:</strong> Adaptarse a los cambios en las preferencias del usuario a lo largo del tiempo
            <br />
            <strong>Solución:</strong> Implementar factores de decaimiento temporal en el modelo y reentrenar regularmente el modelo con datos recientes
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;