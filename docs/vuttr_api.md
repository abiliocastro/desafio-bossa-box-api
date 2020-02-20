FORMAT: 1A
HOST: http://localhost

# Very Useful Tools to Remember API
Este documento contém todos os endpoints da API necessários para a leitura e escrita de recursos no servidor 

## Tool [/tool]

+ Model (application/json)

+ Attributes (object)
    + _id: 507c7f79bcf86cd7994f6c0e (string)
    + title: hotel (string)
    + link: https://github.com/typicode/hotel (string)
    + description: `Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.` (string)
    + tags: node, organizing, webapps, domain, developer, https, proxy (array) 

## Tools [/tools]

+ Attributes (array[Tool])

### Obter todos as ferramentas [GET /tools]
Retorna todas as ferramentas da cadastradas no banco de dados.
Retorna o erro 404 caso não exista ferramentas cadastradas.

+ Response 200 (application/json)
    + Attributes (Tools)

+ Response 404

### Filtrar ferramentas por tag [GET /tools?tag=tag_name]
Retorna todas as ferramentas cadastradas no banco de dados que possuam a tag `tag_name` entre os elementos do seu array de tags.
Retorna o erro 404 caso não exista ferramentas cadastradas com a tag especificada.

+ Response 200 (application/json)
    + Attributes (Tools)

+ Response 404
    ```js
    {
        "message": 'Nenhuma ferramenta encontrada para a tag buscada'
    }
    ```