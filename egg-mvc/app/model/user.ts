module.exports = app => {
  const { STRING, INTERGER, DATE } = app.Sequelize;
  const User = app.model.define("user", {
    id: {
      type: INTERGER,
      primaryKey: true,
      autoIncrement: true,
    }
  })
}