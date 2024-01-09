namespace Zaliczenie.Persistance
{
    //TO jest nasza reprezentacja modelu w bazie danych - inaczej mówiąć to jest schemat tabeli
    public class UserDb
    {
        public int  Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int PhoneNumber { get; set; }
        public string City { get; set; }
        public long PESEL { get; set; }
        public string email { get; set; }
        //public DateTime DataUtworzenia { get; set; }
        //public bool CzyMailJEstPotwierdzony { get; set; }
    }
}

//W package manager console
//Add-Migration <Nazwa migracji>
//Update-Database