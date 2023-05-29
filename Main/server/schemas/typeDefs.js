const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID
        description: String
        image: String
        link: String
        title: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type Query {
        books: [Book]
        users: [User]
    }
`;

module.exports = typeDefs