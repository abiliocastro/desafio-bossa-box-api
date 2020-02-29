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
    + tags: tag_name, node, organizing, webapps, domain, developer, https, proxy (array) 

## Tools [/tools]

+ Attributes (array[Tool])

### Cadastrar uma Nova Ferramenta [POST /tools]
Cadastra uma nova ferramenta no Banco de Dados.
Retorna código 201 e a ferramenta quando o cadastro ocorre com sucesso.
Retorna o erro 400 caso o body da requisição não tenha sido preenchido ou algum erro acorra no cadastro.

+ Request (application/json)
    ```json
    {
        "title": "new tool",
        "link": "https://newtool.com/",
        "description": "A very useful tool for developers",
        "tags": [
            "web",
            "framework",
            "node",
            "http2",
            "https",
            "localhost"
        ]
    }
    ```

+ Response 201  (application/json)
    ```json
    {
        "tags": [
            "web",
            "framework",
            "node",
            "http2",
            "https",
            "localhost"
        ],
        "_id": "5e515802ae8a952baa96f58c",
        "title": "new tool",
        "link": "https://newtool.com/",
        "description": "A very useful tool for developers",
        "__v": 0
    }
    ```

+ Request (application/json)

+ Response 400  (application/json)
    ```json
    {
        "message": "Erro ao criar ferramenta informe os dados corretamente"
    }
    ```

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

+ Response 404 (application/json)
    ```json
    {
        "message": "Nenhuma ferramenta encontrada para a tag buscada"
    }
    ```

### Atualizar uma Ferramenta [PUT /tools]
Atualiza uma ferramenta no Banco de Dados.
Retorna código 201 quando a ferramenta é editada com sucesso.
Retorna o erro 400 caso o body da requisição não tenha sido preenchido ou algum erro acorra na edição.

+ Request (application/json)
    ```json
    {
        "id": "5e515802ae8a952baa96f58c",
        "tool": { 
            "title": "new tool edit",
            "link": "https://newtool.com/",
            "description": "A very useful tool for developers",
            "tags": [
                "web",
                "framework",
                "node",
                "http2",
                "https",
                "localhost"
            ] 
        }
    }
    ```

+ Response 201  (application/json)
    ```json
    {
        "message": "Ferramenta editada com sucesso"
    }
    ```

+ Response 400  (application/json)
    ```json
    {
        "message": "Erro ao editar ferramenta, informe os dados corretamente"
    }
    ```

### Deletar uma ferramenta [DELETE /tools/{id_ferramenta}]
Deleta a ferramenta que possui o `id_ferramenta` especificado.
Retorna o erro 400 caso o `id_ferramenta` não esteja especificado ou aconteça algum erro ao deletar a ferramenta

+ Response 204

+ Response 400 (application/json)
    ```json
    { 
        "message": "Erro ao deletar, informe o id da ferramenta"
    }
    ```
