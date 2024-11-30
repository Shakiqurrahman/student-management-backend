type TGuardianRelation = 'Father' | 'Mother' | 'Brother' | 'Sister' | 'Other';

export type TGurdian = {
    gurdianName: string;
    gurdianRelation: TGuardianRelation;
    gurdianNumber: number;
};

export type TStudent = {
    fullName: string;
    studentId: string;
    profile?: string;
    email?: string;
    phone?: number;
    gender: 'Male' | 'Female' | 'Other';
    dateOfBirth: Date;
    presentAddress: string;
    permanentAddress: string;
    gurdian: TGurdian;
    department: string;
};
