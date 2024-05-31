Blockly.Blocks["f_avanza"] = {
init: function() {
this.appendDummyInput()
   .appendField("mover");
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
}};
Blockly.Blocks["f_xira"] = {
init: function() {
this.appendDummyInput()
   .appendField("girar")
   .appendField(new Blockly.FieldDropdown([["Izquierda","E"], ["Derecha","D"]]), "direccion");
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
}};
Blockly.Blocks["f_hai_cElse"] = {init: function() {var DIRECTIONS =[["avanzar","FR"],["","ES"],["","DE"]];
this.setColour(210);
this.appendDummyInput().appendField("si puede").appendField(new Blockly.FieldDropdown(DIRECTIONS),"DIR");
this.appendStatementInput("DO").appendField("entonces");
this.appendStatementInput("ELSE").appendField("si no");this.setTooltip("");
this.setPreviousStatement(true);this.setNextStatement(true);}};
Blockly.Blocks["f_mentres"] = {init: function() {this.setColour(120);this.appendDummyInput().appendField("repetir hasta")
.appendField(new Blockly.FieldImage("ima/fin.jpg", 12, 12));
this.appendStatementInput("DO").appendField("entonces");this.setPreviousStatement(true);this.setTooltip("");}};
