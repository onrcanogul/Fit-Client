export class ListUsers{
    totalCount: number;
    entity: User[];
}

export class User{
    id: string;
    fatRate: number;
    activity: string;
    age: number;
    bmr: number;
    email: string;
    height: number;
    weight: number;
    gender: number;
    username: string;
}


// Id = x.Id,
// FatRate = x.FatRate,
// Activity = x.Activity,
// Age = x.Age,
// BMR = x.BMR,
// Email = x.Email,
// Height = x.Height,
// Weight = x.Weight,
// Gender = x.Gender,
// Username = x.UserName

// Id = user.Id,
// BMR = user.BMR,
// Email = user.Email,
// FatRate = user.FatRate,
// Gender = user.Gender,
// Height = user.Height,
// Weight = user.Weight,
// Activity = user.Activity,
// Age = user.Age,
// Username=user.UserName