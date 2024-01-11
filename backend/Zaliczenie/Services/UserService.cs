using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Net.Mail;
using System.Net;
using System.Text.Encodings.Web;
using System.Xml.Linq;
using Zaliczenie.Persistance;

namespace Zaliczenie.Services
{
    public class UserService
    {
        public void AddUser(UserAddModel user)
        {
            using (var db = new DataContext())
            {
                var newUser = new UserDb
                {
                    Name = user.Name,
                    Surname = user.Surname,
                    PhoneNumber = user.PhoneNumber,
                    City = user.City,
                    PESEL = user.PESEL,
                    email = user.Email,

                };

                //newUser.DataUtworzenia = DateTime.Now;
                //newUser.CzyMailJEstPotwierdzony = false;

                db.Users.Add(newUser);
                db.SaveChanges();
            }
        }


        public void UpdateUser(UserUpdateModel user)
        {
            using (var db = new DataContext())
            {
                var userToUpdate = db.Users.FirstOrDefault(x => x.Id == user.Id);
                userToUpdate.Name = user.Name;
                userToUpdate.Surname = user.Surname;
                userToUpdate.PhoneNumber = user.phoneNumber;
                userToUpdate.City = user.City;
                userToUpdate.email = user.Email;
                db.SaveChanges();
            }
        }
        public List<UserGetModel> GetUsers()
        {
            using (var db = new DataContext())
            {
                List<UserDb> daneZbazy =  db.Users.ToList();
                List<UserGetModel> result = new List<UserGetModel>();
                foreach (var user in daneZbazy)
                {
                    result.Add(new UserGetModel { 
                        Id = user.Id,                
                        Name = user.Name,
                        Surname = user.Surname,
                        PhoneNumber = user.PhoneNumber,
                        City = user.City,
                        Email = user.email,
                        PESEL = user.PESEL,

                    });
                }

                return result;
            }
        }

       
        public UserGetModel GetDetails(int userId)
        {
            using (var db = new DataContext())
            {
                var user = db.Users.FirstOrDefault(u => u.Id == userId);
                return new UserGetModel
                {
                    Id = user.Id,
                    Name = user.Name,
                    Surname = user.Surname,
                    PhoneNumber = user.PhoneNumber,
                    City = user.City,
                    Email = user.email,
                    PESEL = user.PESEL,
                };
            }
        }

    

        public void DeleteUser(int userId)
        {
            using (var db = new DataContext())
            {
                var userToDelete = db.Users.FirstOrDefault(x => x.Id == userId);
                if (userToDelete != null)
                {
                    db.Users.Remove(userToDelete);
                    db.SaveChanges();
                }
            }
        }


        public void SendMail(SendMailModel mailModel)
        {
            using (var db = new DataContext())
            {
                var user = db.Users.FirstOrDefault(x => x.Id == mailModel.Id);
                if (user == null)
                    throw new ValidationException("User not found");

                var smtpClient = new SmtpClient("smtp.poczta.onet.pl")
                {
                    Port = 587,
                    Credentials = new NetworkCredential("testigors@op.pl", "NZXTa@@@1"),
                    EnableSsl = false,
                };

                MailMessage message = new MailMessage("testigors@op.pl", user.email);
                message.Subject = mailModel.Subject;
                message.Body = mailModel.Text;


                smtpClient.Send(message);

            }
        }
    }
}
      //  public void DeleteUser(DeleteUsersModel users)

