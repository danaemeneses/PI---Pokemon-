const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('type', {
    //ID => lo genera solo porque no hace falta que sea uuid x ej 

    name: { 
        type: DataTypes.STRING,
        allowNull: true,
      }
  })
}

  