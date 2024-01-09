namespace Zaliczenie.Services
{
    //TO jest definica modelu który wysyłamy w requescie http
    public class UserAddModel
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public int PhoneNumber { get; set; }
        public string City { get; set; }
        public long PESEL { get; set; }
        public string Email { get; set; }
    }


    public class UserUpdateModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int phoneNumber { get; set; }

        public long PESEL { get; set; }
        public string City { get; set; }
        public string Email { get; set; }
    }

    public class UserGetModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int PhoneNumber { get; set; }
        public string City { get; set; }
        public string Email { get; set; }
        public long PESEL { get; set; }
    }
    public class GetDetailsModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int PhoneNumber { get; set; }
        public string City { get; set; }
        public long PESEL { get; set; }
    }


    public class SendMailModel
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public string Text { get; set; }
    }
}
