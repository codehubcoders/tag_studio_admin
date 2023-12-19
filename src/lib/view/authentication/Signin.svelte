<script>
  import { goto } from "$app/navigation";
  import { createForm } from "svelte-forms-lib";
  import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    FormGroup,
    Input,
    Label,
    Alert,
    Row,
  } from "sveltestrap";
  import * as yup from "yup";
  import Checkbox from "../../components/checkbox/Checkbox.svelte";
  import { setItem } from "../../utility/localStorageController";

  let visible = true;
  let loader = false;

  const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const { form, errors, handleChange, handleSubmit } = createForm({
    initialValues: {
      email: "tagstudio@email.com",
      password: "12345678",
    },
    validationSchema: loginSchema,
    onSubmit: () => {
      goto(`/dashboard`);
    },
  });
  const handleCheckBox = () => {};
</script>

<div class="main-content">
  <div class="admin">
    <Container fluid>
      <Row class="justify-content-center">
        <Col xxl="3" md="6" sm="8">
          <div class="edit-profile">
            <Card class="border-0">
              <!-- {#if loader}
								<Spinner type="primary" size="md" />
							{/if} -->
              <CardHeader>
                <div class="edit-profile__title">
                  <h6>Tag Studio</h6>
                </div>
              </CardHeader>
              <CardBody>
                <form on:submit|preventDefault={handleSubmit}>
                  <div class="edit-profile__body">
                    <FormGroup class="form-group mb-25">
                      <Label for="username">Email</Label>
                      <Input
                        on:change={handleChange}
                        bind:value={$form.email}
                        invalid={$errors.email.length > 0}
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        placeholder="이메일을 입력해 주세요"
                      />
                      {#if $errors.email}
                        <div class="invalid-feedback">{$errors.email}</div>
                      {/if}
                    </FormGroup>
                    <FormGroup class="form-group mb-15">
                      <Label for="password">password</Label>
                      <div class="position-relative">
                        <Input
                          on:change={handleChange}
                          bind:value={$form.password}
                          invalid={$errors.password.length > 0}
                          type="password"
                          class="form-control"
                          id="password"
                          name="password"
                          placeholder="Password"
                        />
                        {#if $errors.password}
                          <div class="invalid-feedback">{$errors.password}</div>
                        {/if}
                      </div>
                    </FormGroup>

                    <div
                      class="admin__button-group button-group d-flex pt-1 justify-content-md-start justify-content-center"
                    >
                      <Button
                        type="submit"
                        color="primary"
                        class="btn btn-primary btn-default w-100 btn-squared text-capitalize lh-normal px-50 signIn-createBtn "
                      >
                        {loader ? "Loading" : "로그인"}
                      </Button>
                    </div>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</div>

<style lang="scss">
  :global {
    @import "../../../../src/assets/sass/components/style.scss";
  }
</style>
