class Cliente {
    #cpf;

    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
        this.telefones = new Set();
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }

    getUpper() {
        return this.nome.toUpperCase();
    }




    getCpf() {
        return this.#cpf;
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }

    getCompleto() {
        return `${this.rua}, ${this.numero} - ${this.cidade}/${this.estado}`;
    }
}

class Empresa {
    #cnpj;

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    adicionarCliente(cliente) {
        this.clientes.add(cliente);
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }

    getUpperRazao () {
        return this.razaoSocial.toUpperCase()
    }

    getUpperFant () {
        return this.nomeFantasia.toUpperCase()
    }


    mostrarDetalhes() {
        console.log(`Razão Social: ${this.razaoSocial}`);
        console.log(`Nome Fantasia: ${this.nomeFantasia}`);

        console.log('\n--- Telefones da Empresa ---');
        this.telefones.forEach(telefone => {
            console.log(telefone.getCompleto());
        });

        console.log('\n--- Clientes ---');
        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`CPF: ${cliente.getCpf()}`);
            console.log(`Endereço: ${cliente.endereco.getCompleto()}`);

            if (cliente.telefones.size > 0) {
                console.log('Telefones do Cliente:');
                cliente.telefones.forEach(tel => {
                    console.log(tel.getCompleto());
                });
            } else {
                console.log('Não tem como ver o cliente se ele não tem telefone >:)');
            }

            console.log('');
        });
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }

    getCompleto() {
        return `(${this.ddd}) ${this.numero}`;
    }
}

const enderecoEmri = new Endereco("SP", "São José dos Campos", "Rua Guanahani", 314);
const cliente1 = new Cliente("Henry Tito", "399.832.839-40", enderecoEmri);

cliente1.adicionarTelefone(new Telefone(12, 991358590));
cliente1.adicionarTelefone(new Telefone(12, 123124124));

//isso aq era pra teste, mas pode ficar assim no importa, perdao pela desorganizaçao nessa parte

const enderecoEmpresa = new Endereco("SP", "São Paulo", "Av. Paulista", 1000);
const empresa = new Empresa("Empresa Crazy LTDA", "Crazy Company", "12.345.678/0001-99", enderecoEmpresa);

empresa.adicionarTelefone(new Telefone(11, 33334444));
empresa.adicionarTelefone(new Telefone(11, 99998888));

empresa.adicionarCliente(cliente1);




const Endereco2 = new Endereco("RJ", "Rio de Janeiro", "Rua dos traficantes", 512)
const cliente2 = new Cliente("Walter White", "102.232.232-53", Endereco2)
cliente2.adicionarTelefone(new Telefone(13, 1203210321))
cliente2.adicionarTelefone(new Telefone(13, 1203212424))
empresa.adicionarCliente(cliente2);


const Endereco3 = new Endereco("ES", "Vitória", "Rua dos caras que moram em Vitória", 469)
const cliente3 = new Cliente("Hector Salamanca", "103.442.232-53", Endereco3)
cliente3.adicionarTelefone(new Telefone(69, 1245645321))
cliente3.adicionarTelefone(new Telefone(69, 1202412424))
empresa.adicionarCliente(cliente3)

const Endereco4 = new Endereco("ES", "Vitória", "Rua dos caras que moram em Vitória no bairro nobre insano", 387)
const cliente4 = new Cliente("Jesse Pinkman", "102.232.232-53", Endereco4)
cliente4.adicionarTelefone(new Telefone(20, 12454355321))
cliente4.adicionarTelefone(new Telefone(20, 12024345424))
empresa.adicionarCliente(cliente4)

const Endereco5 = new Endereco("ES", "Vitória", "Rua dos caras que moram em Vitória em outra parte", 932)
const cliente5 = new Cliente("Daniel Piloto", "102.232.232-53", Endereco5)
cliente5.adicionarTelefone(new Telefone(60, 5342645321))
cliente5.adicionarTelefone(new Telefone(60, 4958412424))
empresa.adicionarCliente(cliente5)


empresa.mostrarDetalhes()





