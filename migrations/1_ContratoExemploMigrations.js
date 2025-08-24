const EnvioExemplo = artifacts.require('EnvioExemplo');

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(EnvioExemplo);

  const contrato = await EnvioExemplo.deployed();

  // Escolhendo qual conta vai receber os 10 ETH
  const destinatario = accounts[0]; // por exemplo, segunda conta do Ganache

  // Enviando 10 ETH
  await contrato.enviar(destinatario, {
    from: accounts[2],
    value: web3.utils.toWei('10', 'ether'),
  });
};
