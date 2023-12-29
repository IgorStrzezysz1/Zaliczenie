namespace Zaliczenie.Services
{
    public class UserModel
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public int phoneNumber { get; set; }
        public string City { get; set; }
    }


    public class UserUpdateModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int phoneNumber { get; set; }
        public string City { get; set; }
    }
}
