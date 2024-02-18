var builder = WebApplication.CreateBuilder(args);


var app = builder.Build();

var r = new Resp("test");

app.MapGet("/", () =>
{
    return r;
});

app.Run();

record Resp(string msg)
{
    public string test => msg;
}
