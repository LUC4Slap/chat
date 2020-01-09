module.exports = application => {
  application.get('/', (req, res) => {
    res.status(200).send({ mensagem: 'Olá, Mundo' });
  });
};
