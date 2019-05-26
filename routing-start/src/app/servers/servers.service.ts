export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    let server = this.servers.find(serve => serve.id == id);

    return server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {

    let server = this.servers.find(serve => serve.id == id);

    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
