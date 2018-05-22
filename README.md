# FrontTestChallenge
Tecnologias
HTML + Angular 6 com bootstrap 4

## Configuração do ambiente para desenvolvimento

Para o build do projeto, é necessário possuir o npm instalado (ao instalar o NodeJS, o npm é instalado automaticamente).

É necessário que a versão do node seja 8 ou superior.
Para verificar a versão instalada do node, utilize o comando "node -v".

E a versão do npm seja 4 ou superior.
Para verificar a versão instalada do npm, utilize o comando "npm --version".
Para atualizar o npm com o seguinte comando.
npm install -g npm

É necessário abrir um console na pasta \frontTestChallenge e executar os seguintes comandos para instalação de referências do projeto:
npm install
npm install -g @angular/cli [Angular](https://github.com/angular/angular-cli/blob/master/README.md).

Para a execução do projeto em ambiente de desenvolvimento executar os seguintes comandos:
ng serve --open 

Inicializará no endereço http://localhost:4200.

## Publicação
Para gerar um pacote de publicação deve-se abrir um console na pasta \frontTestChallenge  e executar o comando.

ng build --prod

No final do comando a pasta dist é criada dentro de \frontTestChallenge com os arquivos resultantes de publicação.
