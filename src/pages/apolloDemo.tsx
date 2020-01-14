import React, { useEffect, useState } from 'react'
import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider, Query } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider, useQuery, useMutation } from 'react-apollo-hooks'

import gql from 'graphql-tag'
import { Button } from 'antd'

const QUERY_USER = gql`
query($id: Int){
    user(id: $id) {
        id
        name
        age
    }
}
`

const QUERY_TASKS = gql`
    query($id: Int){
        tasks(id: $id) {
            id
            content
            description
        }
    }
`
const CREATE_TOKEN = gql`
    mutation($email: String!, $password: String!){
        createToken(input: {email: $email, password: $password}) {
            token
        }
    }
`

const QUERY_VIWER = gql`
    query($id: Int) {
        viewer(id: $id) {
            id
            name
            email
            team {
                liveAccount {
                    enabled
                }
                sandboxAccount {
                    enabled
                }
            }
        }
    }
`

const client = new ApolloClient({
    link: createHttpLink({
        uri: 'http://localhost:9000/graphql'
    }),
    cache: new InMemoryCache()
})
interface Props {

}

const ChildApolloDemo = (props: any) => {
    return (
        <ApolloProvider client={client}>
            <Query
                query={QUERY_TASKS}
                variables={{id: 1}}
            >
                {
                    ({loading, error, data}: {
                        data: any
                        error?: any
                        loading: boolean
                    }) => {
                        if (loading) return <p>loading...</p>
                        if (error) return <p>error: {error}</p>
                        return data.tasks.map((item: any, key: number) => {
                            return (
                                <div key={key}>
                                    <p>content: <span style={{color: 'red'}}>{item.content}</span></p>
                                    <p>description: <span style={{color: 'red'}}>{item.description}</span></p>
                                </div>
                            )
                        })
                    }
                }
            </Query>
            
        </ApolloProvider>
    )
}

const ChildApolloHooksDemo = (props: any) => {
    const [createToken, {data, loading, error}] = useMutation(CREATE_TOKEN)
    const {data: team} = useQuery(QUERY_VIWER, {variables: {id: 1}})
    
    console.log(data)
    console.log(team)
    const handleClick = () => {
        createToken({ variables: {email: '777@zhangjing.com', password: '123456'} })
    }
    return (
        <div>
            <p>test use apollo-hooks</p>
            <Button onClick={handleClick}>createToken</Button>
        </div>
    )
}


const ApolloDemo: React.FC = (props: any) => {
    const [user, setUser] = useState({
        name: '',
        age: null,
        id: null
    })
    useEffect(() => {
        client.query({
            query: QUERY_USER,
            variables: {
                id: 1
            }
        }).then((result: any) => {
            console.log(result)
            const user = result.data.user
            setUser(user)
        })
    })
    const getCache = () => {
        const data = client.readQuery({
            query: QUERY_USER,
            variables: {
                id: 1
            }
        })
        console.log(data)
    }
    return (
        <div>
            <p>username: {user.name}</p>
            <p>age: {user.age}</p>
            <br />
            <br />
            <Button onClick={getCache}>get cache</Button>
            <ChildApolloDemo />
            <ApolloHooksProvider client={client}>
                <ChildApolloHooksDemo />
            </ApolloHooksProvider>
        </div>
    )
}


export default ApolloDemo