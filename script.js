$(document).ready(function() {
    setTimeout(function() {
        $('#image').hide();
        $('.container').show();
    }, 1000);

    $('#loginBtn').click(function() {
        $('#buttons').hide();
        $('#loginForm').show();
    });

    $('#registerBtn').click(function() {
        $('#buttons').hide();
        $('#registerForm').show();
    });

    $('#listUsersBtn').click(function() {
        $('#buttons').hide();
        $('#userList').show();
        $('#userTable').html(''); // Limpa a tabela ao entrar na página
    });

    $('#backBtnLogin').click(function() {
        $('#loginForm').hide();
        $('#buttons').show();
    });

    $('#backBtnRegister').click(function() {
        $('#registerForm').hide();
        $('#buttons').show();
    });

    $('#backBtnUserList').click(function() {
        $('#userList').hide();
        $('#buttons').show();
    });

    $('#submitBtn').click(function() {
        var email = $('#email').val();
        var password = $('#password').val();
        if(email === 'teste@email.com' && password === '1234') {
            $('#loginForm').hide();
            $('#dashboard').show();
        }
    });

    $('#backBtnDashboard').click(function() {
        $('#dashboard').hide();
        $('#buttons').show();
    });

    $('#productsBtn').click(function() {
        $('#dashboard').hide();
        $('#products').show();
    });

    $('#backBtnProducts').click(function() {
        $('#products').hide();
        $('#dashboard').show();
    });

    $('#regSubmitBtn').click(function() {
        var name = $('#name').val();
        var email = $('#regEmail').val();
        var password = $('#regPassword').val();
        if(name && email && password) {
            $('#registerForm').hide();
            $('#successMessage').show();
            setTimeout(function() {
                $('#successMessage').hide();
                $('#buttons').show();
            }, 1000);
        }
    });

    $('#listAllBtn').click(function() {
        var users = [
            {name: 'teste', email: 'teste@email.com', cep: '12345-678', rua: 'Rua 1', numero: '123', bairro: 'Bairro 1', distrito: 'Distrito 1', cidade: 'Cidade 1', estado: 'Estado 1'},
            {name: 'Bob', email: 'bob@email.com', cep: '89401-000', rua: 'Rua 2', numero: '10', bairro: 'Distrito Industrial', cidade: 'Curitiba', estado: 'PR'}
        ];
        var table = '<table class="table table-bordered">';
        users.forEach(function(user) {
            table += '<tr><td>Nome</td><td>' + user.name + '</td></tr>';
            table += '<tr><td>Email</td><td>' + user.email + '</td></tr>';
            table += '<tr><td>CEP</td><td>' + user.cep + '</td></tr>';
            table += '<tr><td>Rua</td><td>' + user.rua + '</td></tr>';
            table += '<tr><td>Número</td><td>' + user.numero + '</td></tr>';
            table += '<tr><td>Bairro</td><td>' + user.bairro + '</td></tr>';
            table += '<tr><td>Distrito</td><td>' + user.distrito + '</td></tr>';
            table += '<tr><td>Cidade</td><td>' + user.cidade + '</td></tr>';
            table += '<tr><td>Estado</td><td>' + user.estado + '</td></tr>';
        });
        table += '</table>';
        $('#userTable').html(table);
    });

    $('#sendBtn').click(function() {
        var userId = $('#userId').val();
        if(userId) {
            var user = {name: 'teste', email: 'teste@email.com', cep: '12345-678', rua: 'Rua 1', numero: '123', bairro: 'Bairro 1', distrito: 'Distrito 1', cidade: 'Cidade 1', estado: 'Estado 1'};
            var table = '<table class="table table-bordered">';
            table += '<tr><td>Nome</td><td>' + user.name + '</td></tr>';
            table += '<tr><td>Email</td><td>' + user.email + '</td></tr>';
            table += '<tr><td>CEP</td><td>' + user.cep + '</td></tr>';
            table += '<tr><td>Rua</td><td>' + user.rua + '</td></tr>';
            table += '<tr><td>Número</td><td>' + user.numero + '</td></tr>';
            table += '<tr><td>Bairro</td><td>' + user.bairro + '</td></tr>';
            table += '<tr><td>Distrito</td><td>' + user.distrito + '</td></tr>';
            table += '<tr><td>Cidade</td><td>' + user.cidade + '</td></tr>';
            table += '<tr><td>Estado</td><td>' + user.estado + '</td></tr>';
            table += '</table>';
            $('#userTable').html(table);
        }
    });

    $('#categoriesBtn').click(function() {
        var categories = ['Categoria 1', 'Categoria 2', 'Categoria 3'];
        var list = '<ul style="list-style-type: none;">'; // Remove a bolinha marcadora
        categories.forEach(function(category) {
            list += '<li>' + category + '</li>';
        });
        list += '</ul>';
        list += '<button class="btn btn-secondary" id="backBtnCategories">Voltar</button>'; // Adiciona o botão de voltar
        $('#dashboard').html(list);

        $('#backBtnCategories').click(function() {
            $('#dashboard').html(''); // Limpa a lista ao sair da página
            $('#dashboard').append('<button class="btn btn-primary" id="categoriesBtn">Categorias</button>');
            $('#dashboard').append('<button class="btn btn-primary" id="clientsBtn">Clientes</button>');
            $('#dashboard').append('<button class="btn btn-primary" id="productsBtn">Produtos</button>');
            $('#dashboard').append('<button class="btn btn-secondary" id="backBtnDashboard">Voltar</button>');
            bindButtons();
        });
    });

    $('#clientsBtn').click(function() {
        var clients = [
            {name: 'Bob', email: 'bob@email.com', cep: '89401-000', rua: 'Rua 2', numero: '10', bairro: 'Distrito Industrial', cidade: 'Curitiba', estado: 'PR'}
        ];
        var table = '<table class="table table-bordered">';
        clients.forEach(function(client) {
            table += '<tr><td>Nome</td><td>' + client.name + '</td></tr>';
            table += '<tr><td>Email</td><td>' + client.email + '</td></tr>';
            table += '<tr><td>CEP</td><td>' + client.cep + '</td></tr>';
            table += '<tr><td>Rua</td><td>' + client.rua + '</td></tr>';
            table += '<tr><td>Número</td><td>' + client.numero + '</td></tr>';
            table += '<tr><td>Bairro</td><td>' + client.bairro + '</td></tr>';
            table += '<tr><td>Cidade</td><td>' + client.cidade + '</td></tr>';
            table += '<tr><td>Estado</td><td>' + client.estado + '</td></tr>';
        });
        table += '</table>';
        $('#dashboard').html(table);
        $('#dashboard').append('<button class="btn btn-secondary" id="backBtnClients">Voltar</button>');

        $('#backBtnClients').click(function() {
            $('#dashboard').html(''); // Limpa a tabela ao sair da página
            $('#dashboard').append('<button class="btn btn-primary" id="categoriesBtn">Categorias</button>');
            $('#dashboard').append('<button class="btn btn-primary" id="clientsBtn">Clientes</button>');
            $('#dashboard').append('<button class="btn btn-primary" id="productsBtn">Produtos</button>');
            $('#dashboard').append('<button class="btn btn-secondary" id="backBtnDashboard">Voltar</button>');
            bindButtons();
        });
    });

    $('#viewBtn').click(function() {
        var product = {description: 'celular', quantidade_produto: '1', valor: '55000', categoria: 'celulares'};
        var table = '<table class="table table-bordered">';
        table += '<tr><td>Descrição</td><td>' + product.description + '</td></tr>';
        table += '<tr><td>Quantidade</td><td>' + product.quantidade_produto + '</td></tr>';
        table += '<tr><td>Valor</td><td>' + product.valor + '</td></tr>';
        table += '<tr><td>Categoria</td><td>' + product.categoria + '</td></tr>';
        table += '</table>';
        $('#products').html(table);
        $('#products').append('<button class="btn btn-secondary" id="backBtnViewProduct">Voltar</button>');
        $('#backBtnViewProduct').click(function() {
            $('#products').html(''); // Limpa a tabela ao sair da página
            $('#products').append('<button class="btn btn-primary" id="viewBtn">Ver</button>');
            $('#products').append('<button class="btn btn-primary" id="deleteBtn">Deletar</button>');
            $('#products').append('<button class="btn btn-primary" id="createBtn">Criar</button>');
            $('#products').append('<button class="btn btn-secondary" id="backBtnProducts">Voltar</button>');
            bindButtons();
        });
    });

    $('#deleteBtn').click(function() {
        $('#products').html('<div class="alert alert-danger" role="alert">Produto deletado</div>'); // Mostra a mensagem de produto deletado
        setTimeout(function() {
            $('#products').html(''); // Limpa a mensagem após 1 segundo
            $('#products').append('<button class="btn btn-primary" id="viewBtn">Ver</button>');
            $('#products').append('<button class="btn btn-primary" id="deleteBtn">Deletar</button>');
            $('#products').append('<button class="btn btn-primary" id="createBtn">Criar</button>');
            $('#products').append('<button class="btn btn-secondary" id="backBtnProducts">Voltar</button>');
            bindButtons();
        }, 1000);
    });

    $('#createBtn').click(function() {
        $('#products').html('<input type="text" id="description" placeholder="Descrição"><br>');
        $('#products').append('<input type="text" id="quantity" placeholder="Quantidade"><br>');
        $('#products').append('<input type="text" id="value" placeholder="Valor"><br>');
        $('#products').append('<input type="text" id="category" placeholder="Categoria"><br>');
        $('#products').append('<button class="btn btn-primary" id="createProductBtn">Criar</button>');

        $('#createProductBtn').click(function() {
            var description = $('#description').val();
            var quantity = $('#quantity').val();
            var value = $('#value').val();
            var category = $('#category').val();
            if(description && quantity && value && category) {
                $('#products').html('<div class="alert alert-success" role="alert">Criado com sucesso</div>'); // Mostra a mensagem de sucesso
                setTimeout(function() {
                    $('#products').html(''); // Limpa a mensagem após 1 segundo
                    $('#products').append('<button class="btn btn-primary" id="viewBtn">Ver</button>');
                    $('#products').append('<button class="btn btn-primary" id="deleteBtn">Deletar</button>');
                    $('#products').append('<button class="btn btn-primary" id="createBtn">Criar</button>');
                    $('#products').append('<button class="btn btn-secondary" id="backBtnProducts">Voltar</button>');
                    bindButtons();
                }, 1000);
            }
        });
    });

    function bindButtons() {
        $('#backBtnDashboard').click(function() {
            $('#dashboard').hide();
            $('#buttons').show();
        });

        $('#productsBtn').click(function() {
            $('#dashboard').hide();
            $('#products').show();
        });

        $('#categoriesBtn').click(function() {
            var categories = ['Categoria 1', 'Categoria 2', 'Categoria 3'];
            var list = '<ul style="list-style-type: none;">'; // Remove a bolinha marcadora
            categories.forEach(function(category) {
                list += '<li>' + category + '</li>';
            });
            list += '</ul>';
            list += '<button class="btn btn-secondary" id="backBtnCategories">Voltar</button>'; // Adiciona o botão de voltar
            $('#dashboard').html(list);

            $('#backBtnCategories').click(function() {
                $('#dashboard').html(''); // Limpa a lista ao sair da página
                $('#dashboard').append('<button class="btn btn-primary" id="categoriesBtn">Categorias</button>');
                $('#dashboard').append('<button class="btn btn-primary" id="clientsBtn">Clientes</button>');
                $('#dashboard').append('<button class="btn btn-primary" id="productsBtn">Produtos</button>');
                $('#dashboard').append('<button class="btn btn-secondary" id="backBtnDashboard">Voltar</button>');
                bindButtons();
            });
        });

        $('#clientsBtn').click(function() {
            var clients = [
                {name: 'Bob', email: 'bob@email.com', cep: '89401-000', rua: 'Rua 2', numero: '10', bairro: 'Distrito Industrial', cidade: 'Curitiba', estado: 'PR'}
            ];
            var table = '<table class="table table-bordered">';
            clients.forEach(function(client) {
                table += '<tr><td>Nome</td><td>' + client.name + '</td></tr>';
                table += '<tr><td>Email</td><td>' + client.email + '</td></tr>';
                table += '<tr><td>CEP</td><td>' + client.cep + '</td></tr>';
                table += '<tr><td>Rua</td><td>' + client.rua + '</td></tr>';
                table += '<tr><td>Número</td><td>' + client.numero + '</td></tr>';
                table += '<tr><td>Bairro</td><td>' + client.bairro + '</td></tr>';
                table += '<tr><td>Cidade</td><td>' + client.cidade + '</td></tr>';
                table += '<tr><td>Estado</td><td>' + client.estado + '</td></tr>';
            });
            table += '</table>';
            $('#dashboard').html(table);
            $('#dashboard').append('<button class="btn btn-secondary" id="backBtnClients">Voltar</button>');

            $('#backBtnClients').click(function() {
                $('#dashboard').html(''); // Limpa a tabela ao sair da página
                $('#dashboard').append('<button class="btn btn-primary" id="categoriesBtn">Categorias</button>');
                $('#dashboard').append('<button class="btn btn-primary" id="clientsBtn">Clientes</button>');
                $('#dashboard').append('<button class="btn btn-primary" id="productsBtn">Produtos</button>');
                $('#dashboard').append('<button class="btn btn-secondary" id="backBtnDashboard">Voltar</button>');
                bindButtons();
            });
        });

        $('#viewBtn').click(function() {
            var product = {description: 'celular', quantidade_produto: '1', valor: '55000', categoria: 'celulares'};
            var table = '<table class="table table-bordered">';
            table += '<tr><td>Descrição</td><td>' + product.description + '</td></tr>';
            table += '<tr><td>Quantidade</td><td>' + product.quantidade_produto + '</td></tr>';
            table += '<tr><td>Valor</td><td>' + product.valor + '</td></tr>';
            table += '<tr><td>Categoria</td><td>' + product.categoria + '</td></tr>';
            table += '</table>';
            $('#products').html(table);
            $('#products').append('<button class="btn btn-secondary" id="backBtnViewProduct">Voltar</button>');

            $('#backBtnViewProduct').click(function() {
                $('#products').html(''); // Limpa a tabela ao sair da página
                $('#products').append('<button class="btn btn-primary" id="viewBtn">Ver</button>');
                $('#products').append('<button class="btn btn-primary" id="deleteBtn">Deletar</button>');
                $('#products').append('<button class="btn btn-primary" id="createBtn">Criar</button>');
                $('#products').append('<button class="btn btn-secondary" id="backBtnProducts">Voltar</button>');
                bindButtons();
            });
        });

        $('#deleteBtn').click(function() {
            $('#products').html('<div class="alert alert-danger" role="alert">Produto deletado</div>'); // Mostra a mensagem de produto deletado
            setTimeout(function() {
                $('#products').html(''); // Limpa a mensagem após 1 segundo
                $('#products').append('<button class="btn btn-primary" id="viewBtn">Ver</button>');
                $('#products').append('<button class="btn btn-primary" id="deleteBtn">Deletar</button>');
                $('#products').append('<button class="btn btn-primary" id="createBtn">Criar</button>');
                $('#products').append('<button class="btn btn-secondary" id="backBtnProducts">Voltar</button>');
                bindButtons();
            }, 1000);
        });

        $('#createBtn').click(function() {
            $('#products').html('<input type="text" id="description" placeholder="Descrição"><br>');
            $('#products').append('<input type="text" id="quantity" placeholder="Quantidade"><br>');
            $('#products').append('<input type="text" id="value" placeholder="Valor"><br>');
            $('#products').append('<input type="text" id="category" placeholder="Categoria"><br>');
            $('#products').append('<button class="btn btn-primary" id="createProductBtn">Criar</button>');

            $('#createProductBtn').click(function() {
                var description = $('#description').val();
                var quantity = $('#quantity').val();
                var value = $('#value').val();
                var category = $('#category').val();
                if(description && quantity && value && category) {
                    $('#products').html('<div class="alert alert-success" role="alert">Criado com sucesso</div>'); // Mostra a mensagem de sucesso
                    setTimeout(function() {
                        $('#products').html(''); // Limpa a mensagem após 1 segundo
                        $('#products').append('<button class="btn btn-primary" id="viewBtn">Ver</button>');
                        $('#products').append('<button class="btn btn-primary" id="deleteBtn">Deletar</button>');
                        $('#products').append('<button class="btn btn-primary" id="createBtn">Criar</button>');
                        $('#products').append('<button class="btn btn-secondary" id="backBtnProducts">Voltar</button>');
                        bindButtons();
                    }, 1000);
                }
            });
        });
    }

    bindButtons();
});
