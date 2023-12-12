using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AirBnb.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class UpdateLocationsTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BuiltIn",
                table: "Locations",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BuiltIn",
                table: "Locations");
        }
    }
}
