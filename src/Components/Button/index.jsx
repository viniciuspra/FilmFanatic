import { Container  } from "./styles";

export function Button({ title, loading = false, isNew, ...rest }){
  return (
    <Container type="button" disabled={loading} isNew={isNew} {...rest}>
      {loading ? "Loading.." : title}
    </Container>
  )
}
