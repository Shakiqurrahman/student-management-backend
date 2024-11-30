type TGuardianRelation = 'Father' | 'Mother' | 'Brother' | 'Sister' | 'Other';

export type TGurdian = {
    gurdianName: string;
    gurdianRelation: TGuardianRelation;
    gurdianNumber: string;
};

export type TStudent = {
    fullName: string;
    profile?: string;
    email?: string;
    phone?: string;
    gender: 'Male' | 'Female' | 'Other';
    dateOfBirth: Date | string;
    presentAddress: string;
    permanentAddress: string;
    gurdian: TGurdian;
    department: string;
};
