// Handles pym sendHeight and other functionality if needed

export const pymSendHeight = ({timeout=0}={}) => {
  /* Set options in object. Params:
  --timeout: int. Sets milliseconds before pymChild sends height to parent.
  defaults to 0. 
  --checkHeight: bool. If true, checks whether div is in viewport for small screens. 
  If not, scrolls to top of div. Defaults to true.
  */

  setTimeout(() => pymChild.sendHeight(), timeout)

}