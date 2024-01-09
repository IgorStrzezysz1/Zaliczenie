using Microsoft.AspNetCore.Mvc;
using Zaliczenie.Persistance;
using Zaliczenie.Services;

namespace Zaliczenie.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class UserController : Controller
    {
        private readonly UserService userService;
        private object _deleteServces;

        public UserController()
        {
            userService = new UserService();
        }

        [HttpPut(Name = "AddUser")]
        public IActionResult Add([FromBody] UserAddModel user) //request.payload
        {
            userService.AddUser(user);
            return Ok();
        }

        [HttpDelete(Name = "DeleteUser")]
        public IActionResult Delete(int id)
        {
            userService.DeleteUser(id);
            return Ok();
        }

        [HttpPost(Name = "UpdateUser")]
        public IActionResult Update([FromBody] UserUpdateModel user)
        {
            userService.UpdateUser(user);
            return Ok();

        }

        [HttpGet(Name = "GetList")]
        public List<UserGetModel> GetList()
        {
            return userService.GetUsers();

        }

        [HttpGet(Name = "GetDetails")]
        public UserGetModel GetDetails(int id)
        {
            return userService.GetDetails(id);

        }

        [HttpPost(Name = "SendMail")]
        public IActionResult SendMail([FromBody] SendMailModel user)
        {
            userService.SendMail(user);
            return Ok();

        }
    }
}
