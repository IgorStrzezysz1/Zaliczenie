namespace Zaliczenie.Persistance
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int phoneNumber { get; set; }
        public string City { get; set; }
    }
}

//W package manager console
//Add-Migration <Nazwa migracji>
//Update-Database