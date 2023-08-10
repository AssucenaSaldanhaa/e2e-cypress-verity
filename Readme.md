## Como instalar as dependências

```
npm install
```

## Como executar o cypress cli

```
npx cypress open
```

## Como executar o cypress headless

```
npx cypress run
```

## Pré-condições

> node instalado

## Plano de testes

>Página da home
>
>Teste 01: verificar se os títulos: Somos Verity_  Nossos clientes_  estão visíveis na home page - Passou!
>
>Página de contatos
>
>Teste 01: Preencher formulário com sucesso. - Falhou!
>
>Teste 02: Preencher formulário apenas com campos obrigatórios. - Falhou!
>
>Teste 03: Tentar enviar formulário com campo email inválido. - Passou!
>
>Teste 04: Tentar enviar o formulário com campo nome vazio. - Passou!
>
>Teste 05: Tentar enviar o formulário com campo email vazio. - Passou!
>
>Teste 06: Tentar enviar o formulário com campo telefone vazio. - Passou!
>

## Resultado do teste

Teste 01 e Teste 02. 

Ambos apresentam a palavra Obrigado na tela, mas esta palavra está desabilitada nos testes automatizados.

OBS: Este erro não ocorre nos testes manuais.

<img width="1463" alt="Captura de Tela 2023-08-10 às 18 32 31" src="https://github.com/AssucenaSaldanhaa/e2e-cypress-verity/assets/118921604/87f457f2-31c6-489a-b2e6-21082f2c67c1">


