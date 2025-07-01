
# 🎸 LaMusic App — Aplicativo de E-commerce de Instrumentos Musicais

LaMusic é um aplicativo mobile completo de e-commerce voltado para a venda de instrumentos musicais. O app foi desenvolvido utilizando **React Native**, **Expo** e integrado a uma **API em Spring Boot**. O objetivo é proporcionar uma experiência de compra fluida, organizada e responsiva para o usuário final.

## 📲 Demonstração

![App Demo](./demo.gif) <!-- Substitua por um gif/print do app -->

---

## 🧩 Funcionalidades Principais

### ✅ Autenticação de Usuário
- Tela de **Login** com validação
- Tela de **Cadastro**
- Persistência de sessão com Context API

### 🏠 Tela Inicial - Minha Conta
- Acesso rápido a:
  - Dados pessoais
  - Endereços
  - Histórico de pedidos
  - Cartões salvos

### 🧭 Navegação
- Estrutura híbrida com **Drawer Navigation** + **Bottom Tabs**
- Ícones personalizados e categorias com navegação dinâmica

### 🛍️ Listagem de Produtos por Categoria
- Consumo da API: `/categories/{id}/products`
- Exibição em grade com 2 colunas
- Imagem, nome, preço e botão de **Adicionar ao carrinho**

### 🛒 Carrinho de Compras
- Listagem dos produtos adicionados
- Quantidade, preço e imagem
- Remoção de itens
- Cálculo automático do total
- Opção para **finalizar compra**

### 📍 Seleção de Endereço
- Lista de endereços vinculados ao usuário
- Marcação de endereço de entrega e cobrança
- Opção para cadastrar novo endereço

### 💳 Pagamento
- Três formas de pagamento:
  - Cartão de crédito
  - PIX (com QR Code)
  - Boleto bancário
- Confirmação e criação do pedido via `/orders/checkout`

---

## 🛠️ Tecnologias Utilizadas

### Front-end (Mobile)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation (Drawer + Tabs)](https://reactnavigation.org/)
- Context API para autenticação
- Axios para consumo da API

### Back-end (Separado, não incluído)
- Spring Boot (Java)
- RESTful API
- Autenticação via JWT
- Banco de Dados MySQL

---

## 📦 Estrutura de Pastas

```
├── App.js
├── TabNavigator.js
├── Navigation.js
├── api.js
├── src/
│   ├── assets/
│   │   ├── screens/
│   │   │   ├── MinhaConta/
│   │   │   ├── ScreensMinhaConta/
│   │   │   └── PagamentoScreen.js
│   │   ├── components/
│   │   │   ├── UserContext.js
│   ├── Header/
│   └── HeroHeader/
```

---

## 🔐 Autenticação

O app utiliza Context API para armazenar o estado do usuário autenticado. Após o login, o usuário é redirecionado à tela **Minha Conta**, com acesso personalizado às funcionalidades.

---

## 📡 Integração com API

As chamadas são feitas com o `axios` para o back-end em Java (Spring Boot), com endpoints como:

- `POST /auth/login`
- `GET /categories/{id}/products`
- `POST /cart/items`
- `GET /cart`
- `POST /orders/checkout`
- `GET /addresses/me`

---

## 📷 Prints da Aplicação

| Login | Produtos por Categoria | Carrinho |
|-------|------------------------|----------|
| ![Login](./screenshots/login.png) | ![Produtos](./screenshots/categoria.png) | ![Carrinho](./screenshots/carrinho.png) |

---

## 🧪 Melhorias Futuras

- Validação de campos no pagamento
- Seleção de quantidade no produto
- Histórico de pedidos com filtro
- Dark mode
- Integração com sistemas de pagamento real (Ex: Mercado Pago, Stripe)

---

## 👨‍💻 Desenvolvedor

**Vagner Junior**  
Desenvolvedor Full Stack | Estudante de Análise e Desenvolvimento de Sistemas  
📍 Brasil  
📫 [LinkedIn](https://www.linkedin.com/in/seu-link)  
💼 [Portfólio](https://github.com/seuusuario)

---

## 🚀 Como Rodar o Projeto

1. Clone o repositório
```bash
git clone https://github.com/seuusuario/lamusic-app.git
cd lamusic-app
```

2. Instale as dependências
```bash
npm install
```

3. Inicie com Expo
```bash
npx expo start
```

4. Escaneie o QR code com o app Expo Go (Android/iOS)

---

## 📌 Requisitos

- Node.js
- Expo CLI (`npm install -g expo-cli`)
- Android/iOS com Expo Go instalado
- API rodando localmente (ajuste a constante `BASE_URL` no arquivo `api.js`)

---

## 📝 Licença

Este projeto é licenciado sob a Licença MIT.

---
