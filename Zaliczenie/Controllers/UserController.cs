using Microsoft.AspNetCore.Mvc;
using Zaliczenie.Persistance;
using Zaliczenie.Services;
using Zaliczenie.UserUpdateModel;

namespace Zaliczenie.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly UserService userService;
        public UserController()
        {
            userService = new UserService();
        }

        [HttpPut(Name = "AddUser")]
        public IActionResult Add([FromBody] UserModel user) //request.payload
        {
            userService.AddUser(user);
            return Ok();
        }

        [HttpDelete(Name = "DeleteUser")]
        public IActionResult Delete(int id)
        {
            return Ok();
        }

        [HttpPost(Name = "UpdateUser")]
        public IActionResult Update([FromBody] UserModel user)
        {
            userService.CreateUser(user);
            return Ok();

        }

        [HttpPost(Name = "CreateUser")]
        public IActionResult DupaDupa(int id, string name)
        {
            return Ok();
        } 
    }
}
