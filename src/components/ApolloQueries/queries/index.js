import gql from 'graphql-tag';

export default {
  query: {
    GET_STAYS: gql`
      query {
        stayses {
          id
          bestPrice
          name
        }
      }
    `,
    GET_FLIGHTS: gql`
      query {
        flightses {
          id
          parentId {
            id
          }
          scales
          price
          description
          link
          img
        }
      }
    `,
    GET_LABELS: gql`
      query {
        labels {
          id
          alias
        }
      }
    `,
    GET_FALTANTES_ZONA: gql`
      query faltantes($name: String!) {
        faltantes(where: { zone: { name: $name } }) {
          id
          open
          modulo
          label {
            alias
          }
          date
          cc
          reason
          balance
          instance
          payed
          resolved
          comment
          zone {
            name
          }
        }
      }
    `,
    GET_FALTANTES_ZONA_UNRESOLVED: gql`
      query faltantes($name: String!) {
        faltantes(where: { zone: { name: $name }, resolved: "" }) {
          id
          open
          modulo
          label {
            alias
          }
          date
          cc
          reason
          balance
          instance
          payed
          resolved
          comment
          zone {
            name
          }
        }
      }
    `,
  },
  mutation: {
    CREATE_COLUMN: gql`
      mutation createColumn($name: String!, $key: String!) {
        createColumn(data: { name: $name, key: $key }) {
          id
          name
          key
        }
      }
    `,
    CREATE_ZONE: gql`
      mutation createZone($name: String!) {
        createZone(data: { name: $name }) {
          id
          name
        }
      }
    `,
    CREATE_LABEL: gql`
      mutation createLabel($alias: String!, $name: String!, $type: String!) {
        createLabel(
          data: {
            alias: $alias
            zone: { connect: { name: $name } }
            type: $type
          }
        ) {
          alias
          zone {
            name
          }
        }
      }
    `,
    CREATE_SUPERVISOR: gql`
      mutation createSupervisor($mail: String!, $name: String!) {
        createSupervisor(
          data: { mail: $mail, zone: { connect: { name: $name } } }
        ) {
          mail
          zone {
            name
          }
        }
      }
    `,
    CREATE_FALTANTE: gql`
      mutation createFaltante(
        $open: String!
        $modulo: String!
        $alias: String!
        $date: String!
        $cc: String!
        $reason: String!
        $balance: Int!
        $instance: String!
        $payed: String!
        $resolved: String!
        $comment: String!
        $name: String!
      ) {
        createFaltante(
          data: {
            open: $open
            modulo: $modulo
            label: { connect: { alias: $alias } }
            date: $date
            cc: $cc
            reason: $reason
            balance: $balance
            instance: $instance
            payed: $payed
            resolved: $resolved
            comment: $comment
            zone: { connect: { name: $name } }
          }
        ) {
          id
        }
      }
    `,
  },
};
