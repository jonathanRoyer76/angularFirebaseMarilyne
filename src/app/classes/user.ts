export class User{
    public uidfirebase: string
    public email      : string
    public mdp        : string
    public status     : string
    public isConnected: boolean
    public urlPhoto   : string

    constructor(pId?: number, pEmail?: string, pMdp?: string, pStatus?: string)
    {
        (pEmail)? this.email=pEmail: this.email='';
        (pMdp)? this.mdp=pMdp: this.mdp='';
        (pStatus)? this.status=pStatus: this.status='Visiteur';
        this.isConnected=false
    }
}