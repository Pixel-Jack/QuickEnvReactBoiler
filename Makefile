.PHONY: run sh logs settings
COM_COLOR   = \033[0;34m
OBJ_COLOR   = \033[0;36m
OK_COLOR    = \033[0;32m
ERROR_COLOR = \033[0;31m
WARN_COLOR  = \033[0;33m
NO_COLOR    = \033[m

PROD 		= prod
STAGING 	= staging
DEV 		= dev
RUN_DEV 	= docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build -d --remove-orphans
RUN_PROD 	= docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d --remove-orphans
RUN_STAGING = docker-compose -f docker-compose.yml -f docker-compose.staging.yml  up --build -d --remove-orphans


# Launch the containers according to the environment specified in .env
run:
ifeq (,$(wildcard ./.env))
	@make settings
else
ifeq ($(DEV), $(shell cat .env | grep -e '^ENVIRONMENT' | sed 's/.*=//'))
	@echo "$(COM_COLOR)DEV MODE$(NO_COLOR)"
	@echo "$(COM_COLOR)$(RUN_DEV)$(NO_COLOR)"
	@$(RUN_DEV)
else ifeq ($(PROD), $(shell cat .env | grep -e '^ENVIRONMENT' | sed 's/.*=//'))
	@echo "$(COM_COLOR)PROD MODE$(NO_COLOR)"
	@echo "$(COM_COLOR)$(RUN_PROD)$(NO_COLOR)"
	@$(RUN_PROD)
else ifeq ($(STAGING), $(shell cat .env | grep -e '^ENVIRONMENT' | sed 's/.*=//'))
	@echo "$(COM_COLOR)STAGING MODE$(NO_COLOR)"
	@echo "$(COM_COLOR)$(RUN_STAGING)$(NO_COLOR)"
	@$(RUN_STAGING)
else
	@echo "$(ERROR_COLOR)There is no environment type set in ENVIRONMENT in .env$(NO_COLOR)"
	@echo "$(ERROR_COLOR)End make$(NO_COLOR)"
endif
endif

# Get access to the shell in the webapp container
sh:
	docker-compose exec webapp sh

# Follow the logs of the webapp container
logs:
	docker-compose logs -f webapp

# Create the settings file then the user need to fill it
settings: .env

.env:
	@echo "$(COM_COLOR)Creation of .env file from .env.example$(NO_COLOR)"
	@cp .env.example .env
	@echo "$(ERROR_COLOR)You need to fill the .env file$(NO_COLOR)"
