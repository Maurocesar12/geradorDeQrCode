# 🛠️ Gerador de QR Code

## Descrição

Este projeto implementa um gerador de **QR Codes** utilizando **Node.js** e a biblioteca **qrcode**. O objetivo principal é permitir a geração de QR Codes a partir de URLs ou textos, que podem ser utilizados em plataformas como e-commerce, marketing digital ou qualquer aplicação que precise compartilhar links de forma rápida e eficiente. A solução é altamente configurável e utiliza variáveis de ambiente para permitir personalização fácil.

---

## 📋 Funcionalidades

- **Geração de QR Codes dinâmicos**: Criação de QR Codes a partir de URLs ou textos arbitrários fornecidos pelo usuário.
- **Saída como PNG**: Exportação do QR Code gerado como imagem no formato PNG.
- **Configuração via variáveis de ambiente**: A aplicação é configurável via um arquivo `.env` para facilitar a personalização do diretório de saída dos QR Codes e outras configurações.
- **Estrutura modular**: O código está organizado em módulos separados para facilitar a manutenção e a extensão do projeto.

---

## 🧠 Tecnologias

- **Node.js**: Plataforma de execução JavaScript no servidor.
- **qrcode**: Biblioteca utilizada para gerar QR Codes.
- **dotenv**: Gerenciamento de variáveis de ambiente, que permite configuração flexível do comportamento da aplicação.
- **npm**: Gerenciador de pacotes para instalação das dependências do projeto.

---

## 🧑‍💻 Instalação e Execução

1. **Clonando o repositório**:
   ```bash
   git clone https://github.com/Maurocesar12/geradorDeQrCode.git

## 📁 Estrutura do Projeto
geradorDeQrCode/ ├── src/ │ ├── index.js # Arquivo principal de execução │ └── utils.js # Funções auxiliares ├── .env # Variáveis de ambiente ├── .gitignore ├── package.json └── README.md


---

## ⚙️ Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Maurocesar12/geradorDeQrCode.git
📝 Como Usar
1. Ao executar o projeto, você será solicitado a inserir uma URL ou texto.

2. O QR Code correspondente será gerado e salvo no diretório especificado em OUTPUT_DIR.

---

3. 🛠️ Melhorias Futuras
1. Integração com APIs de e-commerce para geração automática de QR Codes de produtos

2. Interface gráfica para usuários não técnicos

3. Suporte a diferentes formatos de saída (SVG, PDF)
 
---

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

👨‍💻 Autor
Desenvolvido por Mauro César 🚀

