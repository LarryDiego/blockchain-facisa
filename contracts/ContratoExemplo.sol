// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract EnvioExemplo {
    // Função que envia ETH para um endereço específico
    function enviar(address payable destinatario) public payable {
        require(msg.value > 0, "Precisa enviar algum ETH");
        destinatario.transfer(msg.value);
    }
}
