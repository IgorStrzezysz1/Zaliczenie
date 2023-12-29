using System.Xml.Linq;
using Zaliczenie.Persistance;

namespace Zaliczenie.Services
{
    public class UserService
    {
        public void AddUser(UserModel user)
        {
            using (var db = new DataContext())
            {
                var newUser = new User
                {
                    Name = user.Name
                };

                db.Users.Add(newUser);
                db.SaveChanges();
            }
        }

        public void CreateUser(UserModel user)
        {
            using (var db = new DataContext())
            {
                var createUser = new User
                {
                    Name = user.Name
                };

                db.Users.Add(createUser);
                db.SaveChanges();
            }
        }


        public void UpdateUser(UserUpdateModel user)
        {
            using (var db = new DataContext())
            {
                var userToUpdate = db.Users.FirstOrDefault(x => x.Id == user.Id);
                userToUpdate.Name = user.Name;

                db.SaveChanges();
            }
        }
    }
}
