export class ContractType {
    public id?: number;
    public label = '';
}

export const contractData: ContractType[] = [
    { id: 1, label: 'Interim' },
    { id: 2, label: 'Indépendant' },
    { id: 3, label: 'CDD' },
    { id: 4, label: 'CDI' },
    { id: 5, label: 'Stage' }
];
